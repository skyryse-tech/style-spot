import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';

@Injectable()
export class BookingsService {
  constructor(
    private prisma: PrismaService,
    private redis: RedisService,
  ) {}

  async createBooking(data: {
    customer_id: number;
    owner_id: number;
    service_id: number;
    stylist_id?: number;
    date: string;
    start_time: string;
    is_home_visit: boolean;
    payment_mode: string;
  }) {
    const lockKey = `slot:${data.owner_id}:${data.date}:${data.start_time}`;

    // Acquire distributed lock
    const lockAcquired = await this.redis.acquireLock(lockKey, 5000);
    if (!lockAcquired) {
      throw new BadRequestException('Slot is being booked by someone else. Please try again.');
    }

    try {
      // Check if slot is available
      const service = await this.prisma.service.findUnique({
        where: { service_id: data.service_id },
      });

      if (!service) {
        throw new NotFoundException('Service not found');
      }

      // Calculate end time
      const startDate = new Date(`${data.date}T${data.start_time}`);
      const endDate = new Date(startDate.getTime() + service.duration_minutes * 60000);
      const endTime = endDate.toTimeString().split(' ')[0];

      // Generate booking reference
      const bookingRef = `BK${Date.now()}${Math.floor(Math.random() * 1000)}`;

      // Create booking
      const booking = await this.prisma.booking.create({
        data: {
          booking_ref: bookingRef,
          customer_id: data.customer_id,
          owner_id: data.owner_id,
          service_id: data.service_id,
          stylist_id: data.stylist_id,
          appointment_date: new Date(data.date),
          appointment_start: startDate,
          appointment_end: endDate,
          is_home_visit: data.is_home_visit,
          status: 'pending',
        },
        include: {
          service: true,
          customer: {
            select: {
              customer_id: true,
              first_name: true,
              last_name: true,
              email: true,
            },
          },
        },
      });

      return booking;
    } finally {
      // Always release lock
      await this.redis.releaseLock(lockKey);
    }
  }

  async getBooking(bookingId: number) {
    const booking = await this.prisma.booking.findUnique({
      where: { booking_id: bookingId },
      include: {
        service: true,
        customer: {
          select: {
            customer_id: true,
            first_name: true,
            last_name: true,
            phone: true,
          },
        },
        owner: {
          select: {
            owner_id: true,
            shop_name: true,
            full_name: true,
            shop_address: true,
          },
        },
        payment: true,
      },
    });

    if (!booking) {
      throw new NotFoundException('Booking not found');
    }

    return booking;
  }

  async cancelBooking(bookingId: number) {
    const booking = await this.prisma.booking.update({
      where: { booking_id: bookingId },
      data: { status: 'cancelled' },
    });

    return booking;
  }

  async confirmBooking(bookingId: number) {
    const booking = await this.prisma.booking.update({
      where: { booking_id: bookingId },
      data: { status: 'confirmed' },
    });

    return booking;
  }

  async getOwnerBookings(ownerId: number, status?: string) {
    const where: any = { owner_id: ownerId };
    if (status) {
      where.status = status;
    }

    return this.prisma.booking.findMany({
      where,
      include: {
        service: true,
        customer: {
          select: {
            customer_id: true,
            first_name: true,
            last_name: true,
            phone: true,
          },
        },
        payment: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }

  async getCustomerBookings(customerId: number) {
    return this.prisma.booking.findMany({
      where: { customer_id: customerId },
      include: {
        service: true,
        owner: {
          select: {
            owner_id: true,
            shop_name: true,
            full_name: true,
            shop_address: true,
            phone: true,
          },
        },
        payment: true,
      },
      orderBy: { created_at: 'desc' },
    });
  }
}
