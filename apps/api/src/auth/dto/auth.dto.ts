import { IsEmail, IsString, IsOptional, IsBoolean, IsArray, IsObject } from 'class-validator';

export class SignupDto {
  @IsOptional()
  @IsString()
  first_name?: string;

  @IsOptional()
  @IsString()
  last_name?: string;

  @IsOptional()
  @IsString()
  full_name?: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;

  @IsString()
  role: 'customer' | 'owner';

  // Shop owner specific fields
  @IsOptional()
  @IsString()
  shop_name?: string;

  @IsOptional()
  @IsObject()
  shop_address?: any;

  @IsOptional()
  @IsBoolean()
  is_freelancer?: boolean;

  @IsOptional()
  @IsArray()
  service_types?: string[];

  @IsOptional()
  @IsObject()
  bank_account?: any;

  @IsOptional()
  @IsObject()
  upi_details?: any;
}

export class SigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
