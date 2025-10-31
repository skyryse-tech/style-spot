import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as QRCode from 'qrcode';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async generateUpiQr(bookingRef: string, amount: number) {
    // Get shop owner's UPI details from booking
    const booking = await this.prisma.booking.findUnique({
      where: { booking_ref: bookingRef },
      include: { owner: true },
    });

    if (!booking) {
      throw new Error('Booking not found');
    }

    const upiDetails = booking.owner.upi_details as any;
    const vpa = upiDetails?.vpa || 'merchant@upi';

    // Generate UPI payment string
    const upiString = `upi://pay?pa=${vpa}&pn=StyleSpot&am=${amount}.00&tn=Booking:${bookingRef}&cu=INR`;

    // Generate QR code as base64 PNG
    const qrBase64 = await QRCode.toDataURL(upiString);

    return {
      qr_png_base64: qrBase64.replace('data:image/png;base64,', ''),
      upi_payload: upiString,
      amount,
      booking_ref: bookingRef,
    };
  }

  async reconcilePayment(data: {
    booking_id: number;
    reference: string;
    amount: number;
    method: string;
  }) {
    // Create or update payment record
    const payment = await this.prisma.payment.upsert({
      where: { booking_id: data.booking_id },
      create: {
        booking_id: data.booking_id,
        amount: data.amount,
        method: data.method,
        reference: data.reference,
        status: 'reconciled',
      },
      update: {
        reference: data.reference,
        status: 'reconciled',
      },
    });

    // Update booking status
    await this.prisma.booking.update({
      where: { booking_id: data.booking_id },
      data: { status: 'confirmed' },
    });

    return payment;
  }

  async getPaymentByBooking(bookingId: number) {
    return this.prisma.payment.findUnique({
      where: { booking_id: bookingId },
    });
  }
}
