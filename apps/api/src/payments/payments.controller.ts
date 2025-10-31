import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('generate-qr')
  async generateQr(@Body() body: { booking_ref: string; amount: number }) {
    return this.paymentsService.generateUpiQr(body.booking_ref, body.amount);
  }

  @Post('reconcile')
  async reconcile(@Body() body: {
    booking_id: number;
    reference: string;
    amount: number;
    method: string;
  }) {
    return this.paymentsService.reconcilePayment(body);
  }

  @Get('booking/:id')
  async getPayment(@Param('id') id: string) {
    return this.paymentsService.getPaymentByBooking(parseInt(id));
  }
}
