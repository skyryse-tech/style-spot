import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OwnersService {
  constructor(private prisma: PrismaService) {}

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

  async updateOwner(ownerId: number, data: {
    full_name?: string;
    shop_name?: string;
    shop_address?: any;
    service_types?: string[];
    bank_account?: any;
    upi_details?: any;
    holidays?: any;
  }) {
    return this.prisma.shopOwner.update({
      where: { owner_id: ownerId },
      data,
    });
  }

  async getOwner(ownerId: number) {
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

    return owner;
  }

  async searchShops(params: {
    lat?: number;
    lng?: number;
    service_type?: string;
    q?: string;
    page?: number;
    limit?: number;
  }) {
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

    // Calculate average ratings
    const ownersWithRatings = owners.map((owner) => {
      const avgRating = owner.reviews.length > 0
        ? owner.reviews.reduce((sum, r) => sum + r.rating, 0) / owner.reviews.length
        : 0;
      
      return {
        ...owner,
        avg_rating: avgRating,
        review_count: owner.reviews.length,
      };
    });

    return ownersWithRatings;
  }
}
