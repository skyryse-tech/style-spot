// Auth DTOs
export interface SignupDto {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  email: string;
  phone: string;
  password: string;
  role: 'customer' | 'owner';
}

export interface SigninDto {
  email: string;
  password: string;
}

// Booking DTOs
export interface CreateBookingDto {
  customer_id: number;
  owner_id: number;
  service_id: number;
  stylist_id?: number;
  date: string;
  start_time: string;
  is_home_visit: boolean;
  payment_mode: string;
}

export interface UpdateBookingDto {
  status?: string;
}

// Service DTOs
export interface CreateServiceDto {
  owner_id: number;
  name: string;
  description?: string;
  duration_minutes: number;
  base_price: number;
  gender_type?: string;
  is_home_visit: boolean;
}

export interface UpdateServiceDto {
  name?: string;
  description?: string;
  duration_minutes?: number;
  base_price?: number;
  gender_type?: string;
  is_home_visit?: boolean;
}

// Owner DTOs
export interface RegisterOwnerDto {
  user_email: string;
  phone: string;
  password: string;
  full_name?: string;
  shop_name?: string;
  shop_address?: any;
  is_freelancer: boolean;
  service_types: string[];
  bank_account?: any;
  upi_details?: any;
}

export interface UpdateOwnerDto {
  full_name?: string;
  shop_name?: string;
  shop_address?: any;
  service_types?: string[];
  bank_account?: any;
  upi_details?: any;
  holidays?: any;
}

// Payment DTOs
export interface GenerateQrDto {
  booking_ref: string;
  amount: number;
}

export interface ReconcilePaymentDto {
  booking_id: number;
  reference: string;
  amount: number;
  method: string;
}

// Slot DTOs
export interface CreateSlotDto {
  owner_id: number;
  weekday?: number;
  start_time: string;
  end_time: string;
  capacity: number;
}

// Search DTOs
export interface SearchShopsDto {
  lat?: number;
  lng?: number;
  service_type?: string;
  q?: string;
  page?: number;
  limit?: number;
}
