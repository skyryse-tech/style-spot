import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  async createService(data: {
    owner_id: number;
    name: string;
    description?: string;
    duration_minutes: number;
    base_price: number;
    gender_type?: string;
    is_home_visit: boolean;
  }) {
    return this.prisma.service.create({
      data,
    });
  }

  async updateService(serviceId: number, data: {
    name?: string;
    description?: string;
    duration_minutes?: number;
    base_price?: number;
    gender_type?: string;
    is_home_visit?: boolean;
  }) {
    return this.prisma.service.update({
      where: { service_id: serviceId },
      data,
    });
  }

  async getService(serviceId: number) {
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

    return service;
  }

  async getOwnerServices(ownerId: number) {
    return this.prisma.service.findMany({
      where: { owner_id: ownerId },
      orderBy: { created_at: 'desc' },
    });
  }

  async deleteService(serviceId: number) {
    return this.prisma.service.delete({
      where: { service_id: serviceId },
    });
  }
}
