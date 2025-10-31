
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CustomerScalarFieldEnum = {
  customer_id: 'customer_id',
  first_name: 'first_name',
  last_name: 'last_name',
  email: 'email',
  phone: 'phone',
  password_hash: 'password_hash',
  gender: 'gender',
  dob: 'dob',
  default_address: 'default_address',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ShopOwnerScalarFieldEnum = {
  owner_id: 'owner_id',
  user_email: 'user_email',
  phone: 'phone',
  password_hash: 'password_hash',
  full_name: 'full_name',
  shop_name: 'shop_name',
  shop_address: 'shop_address',
  is_freelancer: 'is_freelancer',
  service_types: 'service_types',
  bank_account: 'bank_account',
  upi_details: 'upi_details',
  holidays: 'holidays',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StylistScalarFieldEnum = {
  stylist_id: 'stylist_id',
  owner_id: 'owner_id',
  name: 'name',
  specialties: 'specialties',
  phone: 'phone',
  created_at: 'created_at'
};

exports.Prisma.ServiceScalarFieldEnum = {
  service_id: 'service_id',
  owner_id: 'owner_id',
  name: 'name',
  description: 'description',
  duration_minutes: 'duration_minutes',
  base_price: 'base_price',
  gender_type: 'gender_type',
  is_home_visit: 'is_home_visit',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SlotScalarFieldEnum = {
  slot_id: 'slot_id',
  owner_id: 'owner_id',
  weekday: 'weekday',
  start_time: 'start_time',
  end_time: 'end_time',
  capacity: 'capacity',
  created_at: 'created_at'
};

exports.Prisma.BookingScalarFieldEnum = {
  booking_id: 'booking_id',
  booking_ref: 'booking_ref',
  customer_id: 'customer_id',
  owner_id: 'owner_id',
  service_id: 'service_id',
  stylist_id: 'stylist_id',
  appointment_date: 'appointment_date',
  appointment_start: 'appointment_start',
  appointment_end: 'appointment_end',
  status: 'status',
  is_home_visit: 'is_home_visit',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.PaymentScalarFieldEnum = {
  payment_id: 'payment_id',
  booking_id: 'booking_id',
  amount: 'amount',
  currency: 'currency',
  method: 'method',
  status: 'status',
  reference: 'reference',
  created_at: 'created_at'
};

exports.Prisma.FileScalarFieldEnum = {
  file_id: 'file_id',
  owner_id: 'owner_id',
  file_path: 'file_path',
  mime_type: 'mime_type',
  meta: 'meta',
  created_at: 'created_at'
};

exports.Prisma.ReviewScalarFieldEnum = {
  review_id: 'review_id',
  booking_id: 'booking_id',
  customer_id: 'customer_id',
  owner_id: 'owner_id',
  rating: 'rating',
  comment: 'comment',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Customer: 'Customer',
  ShopOwner: 'ShopOwner',
  Stylist: 'Stylist',
  Service: 'Service',
  Slot: 'Slot',
  Booking: 'Booking',
  Payment: 'Payment',
  File: 'File',
  Review: 'Review'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
