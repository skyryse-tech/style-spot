import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signup(data: {
    first_name?: string;
    last_name?: string;
    full_name?: string;
    email: string;
    phone: string;
    password: string;
    role: 'customer' | 'owner';
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    try {
      if (data.role === 'customer') {
        const customer = await this.prisma.customer.create({
          data: {
            first_name: data.first_name!,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            password_hash: hashedPassword,
          },
        });

        const token = this.jwtService.sign({
          sub: customer.customer_id,
          email: customer.email,
          role: 'customer',
        });

        return { user: customer, token, role: 'customer' };
      } else {
        const owner = await this.prisma.shopOwner.create({
          data: {
            user_email: data.email,
            phone: data.phone,
            full_name: data.full_name,
            password_hash: hashedPassword,
            is_freelancer: false,
            service_types: [],
          },
        });

        const token = this.jwtService.sign({
          sub: owner.owner_id,
          email: owner.user_email,
          role: 'owner',
        });

        return { user: owner, token, role: 'owner' };
      }
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ConflictException('Email or phone already exists');
      }
      throw error;
    }
  }

  async signin(email: string, password: string) {
    // Try customer first
    const customer = await this.prisma.customer.findUnique({ where: { email } });

    if (customer) {
      const isPasswordValid = await bcrypt.compare(password, customer.password_hash);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const token = this.jwtService.sign({
        sub: customer.customer_id,
        email: customer.email,
        role: 'customer',
      });

      return { user: customer, token, role: 'customer' };
    }

    // Try owner
    const owner = await this.prisma.shopOwner.findUnique({ where: { user_email: email } });

    if (owner) {
      const isPasswordValid = await bcrypt.compare(password, owner.password_hash);
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const token = this.jwtService.sign({
        sub: owner.owner_id,
        email: owner.user_email,
        role: 'owner',
      });

      return { user: owner, token, role: 'owner' };
    }

    throw new UnauthorizedException('Invalid credentials');
  }

  async validateUser(userId: number, role: string) {
    if (role === 'customer') {
      return this.prisma.customer.findUnique({ where: { customer_id: userId } });
    } else {
      return this.prisma.shopOwner.findUnique({ where: { owner_id: userId } });
    }
  }
}
