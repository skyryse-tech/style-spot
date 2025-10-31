import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class NotificationsService {
  private transporter: any;

  constructor() {
    // For development: log emails to console
    this.transporter = createTransport({
      host: 'localhost',
      port: 1025,
      ignoreTLS: true,
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      if (process.env.NODE_ENV === 'production' && process.env.SENDGRID_API_KEY) {
        // TODO: Use SendGrid in production
        console.log('📧 Would send email in production:', { to, subject });
      } else {
        // Development: just log to console
        console.log('📧 Email (dev mode):', {
          to,
          subject,
          html,
        });
      }
    } catch (error) {
      console.error('Email send error:', error);
    }
  }

  async sendBookingNotification(bookingId: number, ownerEmail: string) {
    await this.sendEmail(
      ownerEmail,
      'New Booking Received',
      `<h1>You have a new booking!</h1><p>Booking ID: ${bookingId}</p>`,
    );
  }

  async sendBookingConfirmation(bookingId: number, customerEmail: string) {
    await this.sendEmail(
      customerEmail,
      'Booking Confirmed',
      `<h1>Your booking is confirmed!</h1><p>Booking ID: ${bookingId}</p>`,
    );
  }
}
