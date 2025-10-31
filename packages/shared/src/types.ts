export interface Address {
  street?: string;
  city: string;
  state: string;
  pincode: string;
  lat?: number;
  lng?: number;
}

export interface BankAccount {
  ifsc: string;
  account_no: string;
  name: string;
}

export interface UpiDetails {
  vpa: string;
  upi_qr_data?: string;
}

export interface Customer {
  customer_id: number;
  first_name: string;
  last_name?: string;
  email: string;
  phone: string;
  gender?: string;
  dob?: Date;
  default_address?: Address;
  created_at: Date;
  updated_at: Date;
}

export interface ShopOwner {
  owner_id: number;
  user_email: string;
  phone: string;
  full_name?: string;
  shop_name?: string;
  shop_address?: Address;
  is_freelancer: boolean;
  service_types: string[];
  bank_account?: BankAccount;
  upi_details?: UpiDetails;
  holidays?: any;
  created_at: Date;
  updated_at: Date;
}

export interface Service {
  service_id: number;
  owner_id: number;
  name: string;
  description?: string;
  duration_minutes: number;
  base_price: number;
  gender_type?: string;
  is_home_visit: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Booking {
  booking_id: number;
  booking_ref: string;
  customer_id?: number;
  owner_id: number;
  service_id: number;
  stylist_id?: number;
  appointment_date: Date;
  appointment_start: Date;
  appointment_end: Date;
  status: string;
  is_home_visit: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Payment {
  payment_id: number;
  booking_id: number;
  amount: number;
  currency: string;
  method?: string;
  status: string;
  reference?: string;
  created_at: Date;
}

export interface Review {
  review_id: number;
  booking_id: number;
  customer_id: number;
  owner_id: number;
  rating: number;
  comment?: string;
  created_at: Date;
}
