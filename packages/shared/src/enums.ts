export enum UserRole {
  CUSTOMER = 'customer',
  OWNER = 'owner',
}

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

export enum PaymentStatus {
  PENDING = 'pending',
  RECEIVED = 'received',
  RECONCILED = 'reconciled',
  FAILED = 'failed',
}

export enum PaymentMethod {
  UPI = 'upi',
  CASH = 'cash',
  MANUAL_RECON = 'manual_recon',
}

export enum GenderType {
  MALE = 'male',
  FEMALE = 'female',
  UNISEX = 'unisex',
}

export enum ServiceType {
  HAIRCUT = 'haircut',
  SPA = 'spa',
  BEAUTY = 'beauty',
  MASSAGE = 'massage',
  SALON = 'salon',
}
