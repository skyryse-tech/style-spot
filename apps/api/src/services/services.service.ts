import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class ServicesService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createService(data: {
    owner_id: number;
    name: string;
    description?: string;
    duration_minutes: number;
    base_price: number;
    gender_type?: string;
    is_home_visit: boolean;
  }) {
    const service = await this.prisma.service.create({
      data,
    });

    // Invalidate owner services cache
    await this.redis.getClient().del(`owner:${data.owner_id}:services`);
    await this.redis.getClient().del(`owner:${data.owner_id}`);

    return service;
  }

  async updateService(
    serviceId: number,
    data: {
      name?: string;
      description?: string;
      duration_minutes?: number;
      base_price?: number;
      gender_type?: string;
      is_home_visit?: boolean;
    },
  ) {
    const service = await this.prisma.service.update({
      where: { service_id: serviceId },
      data,
    });

    // Invalidate caches
    await this.redis.getClient().del(`service:${serviceId}`);
    await this.redis.getClient().del(`owner:${service.owner_id}:services`);
    await this.redis.getClient().del(`owner:${service.owner_id}`);

    return service;
  }

  async getService(serviceId: number) {
    // Try cache first
    const cacheKey = `service:${serviceId}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      console.log('✅ Cache hit for service:', serviceId);
      return JSON.parse(cached);
    }

    console.log('❌ Cache miss for service:', serviceId);

    const service = await this.prisma.service.findUnique({
      where: { service_id: serviceId },
      include: {
        owner: {
          select: {
            owner_id: true,
            shop_name: true,
            full_name: true,
            shop_address: true,
            is_freelancer: true,
          },
        },
      },
    });

    if (!service) {
      throw new NotFoundException('Service not found');
    }

    // Cache for 10 minutes
    await this.redis.set(cacheKey, JSON.stringify(service), 600);

    return service;
  }

  async getOwnerServices(ownerId: number) {
    // Try cache first
    const cacheKey = `owner:${ownerId}:services`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      console.log('✅ Cache hit for owner services:', ownerId);
      return JSON.parse(cached);
    }

    console.log('❌ Cache miss for owner services:', ownerId);

    const services = await this.prisma.service.findMany({
      where: { owner_id: ownerId },
      orderBy: { created_at: 'desc' },
    });

    // Cache for 5 minutes
    await this.redis.set(cacheKey, JSON.stringify(services), 300);

    return services;
  }

  async deleteService(serviceId: number) {
    const service = await this.prisma.service.findUnique({
      where: { service_id: serviceId },
    });

    if (service) {
      // Invalidate caches
      await this.redis.getClient().del(`service:${serviceId}`);
      await this.redis.getClient().del(`owner:${service.owner_id}:services`);
      await this.redis.getClient().del(`owner:${service.owner_id}`);
    }

    return this.prisma.service.delete({
      where: { service_id: serviceId },
    });
  }
}
