import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBooking(@Body() body: {
    customer_id: number;
    owner_id: number;
    service_id: number;
    stylist_id?: number;
    date: string;
    start_time: string;
    is_home_visit: boolean;
    payment_mode: string;
  }) {
    return this.bookingsService.createBooking(body);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async getBooking(@Param('id') id: string) {
    return this.bookingsService.getBooking(parseInt(id));
  }

  @Post(':id/cancel')
  @UseGuards(JwtAuthGuard)
  async cancelBooking(@Param('id') id: string) {
    return this.bookingsService.cancelBooking(parseInt(id));
  }

  @Post(':id/confirm')
  @UseGuards(JwtAuthGuard)
  async confirmBooking(@Param('id') id: string) {
    return this.bookingsService.confirmBooking(parseInt(id));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getBookings(
    @Query('owner_id') ownerId?: string,
    @Query('customer_id') customerId?: string,
    @Query('status') status?: string,
  ) {
    if (ownerId) {
      return this.bookingsService.getOwnerBookings(parseInt(ownerId), status);
    }
    if (customerId) {
      return this.bookingsService.getCustomerBookings(parseInt(customerId));
    }
    return [];
  }
}
