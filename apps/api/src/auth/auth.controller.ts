import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: {
    first_name?: string;
    last_name?: string;
    full_name?: string;
    email: string;
    phone: string;
    password: string;
    role: 'customer' | 'owner';
  }) {
    return this.authService.signup(body);
  }

  @Post('signin')
  async signin(@Body() body: { email: string; password: string }) {
    return this.authService.signin(body.email, body.password);
  }
}
