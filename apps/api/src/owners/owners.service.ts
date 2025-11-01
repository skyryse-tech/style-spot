import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class OwnersService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async register(data: {
    user_email: string;
    phone: string;
    password_hash: string;
    full_name?: string;
    shop_name?: string;
    shop_address?: any;
    is_freelancer: boolean;
    service_types: string[];
    bank_account?: any;
    upi_details?: any;
  }) {
    return this.prisma.shopOwner.create({
      data,
    });
  }

  async updateOwner(
    ownerId: number,
    data: {
      full_name?: string;
      shop_name?: string;
      shop_address?: any;
      service_types?: string[];
      bank_account?: any;
      upi_details?: any;
      holidays?: any;
    },
  ) {
    const updated = await this.prisma.shopOwner.update({
      where: { owner_id: ownerId },
      data,
    });

    // Invalidate cache when owner data is updated
    await this.redis.getClient().del(`owner:${ownerId}`);

    return updated;
  }

  async getOwner(ownerId: number) {
    // Try to get from cache first
    const cacheKey = `owner:${ownerId}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      console.log('✅ Cache hit for owner:', ownerId);
      return JSON.parse(cached);
    }

    console.log('❌ Cache miss for owner:', ownerId);

    const owner = await this.prisma.shopOwner.findUnique({
      where: { owner_id: ownerId },
      include: {
        services: true,
        reviews: {
          include: {
            customer: {
              select: {
                first_name: true,
                last_name: true,
              },
            },
          },
          orderBy: { created_at: 'desc' },
          take: 10,
        },
      },
    });

    if (!owner) {
      throw new NotFoundException('Shop owner not found');
    }

    // Cache for 5 minutes (300 seconds)
    await this.redis.set(cacheKey, JSON.stringify(owner), 300);

    return owner;
  }

  // Calculate distance between two coordinates using Haversine formula
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth's radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  // Extract pincode from address object
  private extractPincode(address: any): string | null {
    if (!address) return null;
    if (typeof address === 'string') {
      const match = address.match(/\b\d{6}\b/);
      return match ? match[0] : null;
    }
    return address.pincode || address.postal_code || address.zip || null;
  }

  async searchShops(params: {
    lat?: number;
    lng?: number;
    pincode?: string;
    service_type?: string;
    q?: string;
    page?: number;
    limit?: number;
  }) {
    // Create cache key from search params
    const cacheKey = `search:${JSON.stringify(params)}`;

    // Try to get from cache first
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      console.log('✅ Cache hit for search:', params);
      return JSON.parse(cached);
    }

    console.log('❌ Cache miss for search:', params);

    const page = params.page || 1;
    const limit = params.limit || 20;
    const skip = (page - 1) * limit;

    const where: any = {};

    if (params.service_type) {
      where.service_types = {
        has: params.service_type,
      };
    }

    if (params.q) {
      where.OR = [
        { shop_name: { contains: params.q, mode: 'insensitive' } },
        { full_name: { contains: params.q, mode: 'insensitive' } },
      ];
    }

    const owners = await this.prisma.shopOwner.findMany({
      where,
      include: {
        services: {
          take: 5,
        },
        reviews: {
          select: {
            rating: true,
          },
        },
      },
      skip,
      take: limit,
    });

    // Calculate average ratings and transform response
    let ownersWithRatings = owners.map((owner) => {
      const avgRating =
        owner.reviews.length > 0
          ? owner.reviews.reduce((sum, r) => sum + r.rating, 0) / owner.reviews.length
          : 0;

      // Extract coordinates from shop_address
      const shopAddress: any = owner.shop_address || {};
      const shopLat = (shopAddress as any).latitude || 0;
      const shopLng = (shopAddress as any).longitude || 0;
      const shopPincode = this.extractPincode(shopAddress);

      let distance = 0;

      // Calculate distance based on available location data
      if (params.pincode && shopPincode) {
        // Pincode-based distance (simple difference)
        distance = Math.abs(parseInt(params.pincode) - parseInt(shopPincode)) / 1000;
      } else if (params.lat && params.lng && shopLat && shopLng) {
        // Coordinate-based distance (Haversine formula)
        distance = this.calculateDistance(params.lat, params.lng, shopLat, shopLng);
      }

      // Check if any service is home visit
      const isHomeService = owner.services.some((s) => s.is_home_visit);

      return {
        owner_id: owner.owner_id,
        shop_name: owner.shop_name || owner.full_name,
        shop_address: owner.shop_address,
        service_types: owner.service_types,
        is_freelancer: owner.is_freelancer,
        is_home_service: isHomeService,
        average_rating: parseFloat(avgRating.toFixed(1)),
        total_reviews: owner.reviews.length,
        services: owner.services,
        distance: parseFloat(distance.toFixed(1)),
      };
    });

    // Sort by distance if location provided
    if (params.lat || params.lng || params.pincode) {
      ownersWithRatings.sort((a, b) => a.distance - b.distance);
    }

    // Cache search results for 2 minutes (120 seconds)
    await this.redis.set(cacheKey, JSON.stringify(ownersWithRatings), 120);

    return ownersWithRatings;
  }
}
