
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model ShopOwner
 * 
 */
export type ShopOwner = $Result.DefaultSelection<Prisma.$ShopOwnerPayload>
/**
 * Model Stylist
 * 
 */
export type Stylist = $Result.DefaultSelection<Prisma.$StylistPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Slot
 * 
 */
export type Slot = $Result.DefaultSelection<Prisma.$SlotPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.shopOwner`: Exposes CRUD operations for the **ShopOwner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShopOwners
    * const shopOwners = await prisma.shopOwner.findMany()
    * ```
    */
  get shopOwner(): Prisma.ShopOwnerDelegate<ExtArgs>;

  /**
   * `prisma.stylist`: Exposes CRUD operations for the **Stylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stylists
    * const stylists = await prisma.stylist.findMany()
    * ```
    */
  get stylist(): Prisma.StylistDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.slot`: Exposes CRUD operations for the **Slot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slots
    * const slots = await prisma.slot.findMany()
    * ```
    */
  get slot(): Prisma.SlotDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "customer" | "shopOwner" | "stylist" | "service" | "slot" | "booking" | "payment" | "file" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      ShopOwner: {
        payload: Prisma.$ShopOwnerPayload<ExtArgs>
        fields: Prisma.ShopOwnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopOwnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopOwnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>
          }
          findFirst: {
            args: Prisma.ShopOwnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopOwnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>
          }
          findMany: {
            args: Prisma.ShopOwnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>[]
          }
          create: {
            args: Prisma.ShopOwnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>
          }
          createMany: {
            args: Prisma.ShopOwnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopOwnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>[]
          }
          delete: {
            args: Prisma.ShopOwnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>
          }
          update: {
            args: Prisma.ShopOwnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>
          }
          deleteMany: {
            args: Prisma.ShopOwnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopOwnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopOwnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopOwnerPayload>
          }
          aggregate: {
            args: Prisma.ShopOwnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShopOwner>
          }
          groupBy: {
            args: Prisma.ShopOwnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopOwnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopOwnerCountArgs<ExtArgs>
            result: $Utils.Optional<ShopOwnerCountAggregateOutputType> | number
          }
        }
      }
      Stylist: {
        payload: Prisma.$StylistPayload<ExtArgs>
        fields: Prisma.StylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          findFirst: {
            args: Prisma.StylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          findMany: {
            args: Prisma.StylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>[]
          }
          create: {
            args: Prisma.StylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          createMany: {
            args: Prisma.StylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>[]
          }
          delete: {
            args: Prisma.StylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          update: {
            args: Prisma.StylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          deleteMany: {
            args: Prisma.StylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StylistPayload>
          }
          aggregate: {
            args: Prisma.StylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStylist>
          }
          groupBy: {
            args: Prisma.StylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<StylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.StylistCountArgs<ExtArgs>
            result: $Utils.Optional<StylistCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Slot: {
        payload: Prisma.$SlotPayload<ExtArgs>
        fields: Prisma.SlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          findFirst: {
            args: Prisma.SlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          findMany: {
            args: Prisma.SlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[]
          }
          create: {
            args: Prisma.SlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          createMany: {
            args: Prisma.SlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>[]
          }
          delete: {
            args: Prisma.SlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          update: {
            args: Prisma.SlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          deleteMany: {
            args: Prisma.SlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotPayload>
          }
          aggregate: {
            args: Prisma.SlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlot>
          }
          groupBy: {
            args: Prisma.SlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotCountArgs<ExtArgs>
            result: $Utils.Optional<SlotCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    bookings: number
    reviews: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | CustomerCountOutputTypeCountBookingsArgs
    reviews?: boolean | CustomerCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ShopOwnerCountOutputType
   */

  export type ShopOwnerCountOutputType = {
    services: number
    stylists: number
    slots: number
    bookings: number
    files: number
    reviews: number
  }

  export type ShopOwnerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ShopOwnerCountOutputTypeCountServicesArgs
    stylists?: boolean | ShopOwnerCountOutputTypeCountStylistsArgs
    slots?: boolean | ShopOwnerCountOutputTypeCountSlotsArgs
    bookings?: boolean | ShopOwnerCountOutputTypeCountBookingsArgs
    files?: boolean | ShopOwnerCountOutputTypeCountFilesArgs
    reviews?: boolean | ShopOwnerCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwnerCountOutputType
     */
    select?: ShopOwnerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeCountStylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StylistWhereInput
  }

  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotWhereInput
  }

  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }

  /**
   * ShopOwnerCountOutputType without action
   */
  export type ShopOwnerCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type StylistCountOutputType
   */

  export type StylistCountOutputType = {
    bookings: number
  }

  export type StylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | StylistCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * StylistCountOutputType without action
   */
  export type StylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StylistCountOutputType
     */
    select?: StylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StylistCountOutputType without action
   */
  export type StylistCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookings: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    gender: string | null
    dob: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    password_hash: string | null
    gender: string | null
    dob: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    customer_id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    password_hash: number
    gender: number
    dob: number
    default_address: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomerSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomerMinAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password_hash?: true
    gender?: true
    dob?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerMaxAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password_hash?: true
    gender?: true
    dob?: true
    created_at?: true
    updated_at?: true
  }

  export type CustomerCountAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    password_hash?: true
    gender?: true
    dob?: true
    default_address?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    customer_id: number
    first_name: string
    last_name: string | null
    email: string
    phone: string
    password_hash: string
    gender: string | null
    dob: Date | null
    default_address: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    gender?: boolean
    dob?: boolean
    default_address?: boolean
    created_at?: boolean
    updated_at?: boolean
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    reviews?: boolean | Customer$reviewsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    gender?: boolean
    dob?: boolean
    default_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    password_hash?: boolean
    gender?: boolean
    dob?: boolean
    default_address?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | Customer$bookingsArgs<ExtArgs>
    reviews?: boolean | Customer$reviewsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      first_name: string
      last_name: string | null
      email: string
      phone: string
      password_hash: string
      gender: string | null
      dob: Date | null
      default_address: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customerWithCustomer_idOnly = await prisma.customer.createManyAndReturn({ 
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bookings<T extends Customer$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Customer$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly customer_id: FieldRef<"Customer", 'Int'>
    readonly first_name: FieldRef<"Customer", 'String'>
    readonly last_name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly password_hash: FieldRef<"Customer", 'String'>
    readonly gender: FieldRef<"Customer", 'String'>
    readonly dob: FieldRef<"Customer", 'DateTime'>
    readonly default_address: FieldRef<"Customer", 'Json'>
    readonly created_at: FieldRef<"Customer", 'DateTime'>
    readonly updated_at: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.bookings
   */
  export type Customer$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Customer.reviews
   */
  export type Customer$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model ShopOwner
   */

  export type AggregateShopOwner = {
    _count: ShopOwnerCountAggregateOutputType | null
    _avg: ShopOwnerAvgAggregateOutputType | null
    _sum: ShopOwnerSumAggregateOutputType | null
    _min: ShopOwnerMinAggregateOutputType | null
    _max: ShopOwnerMaxAggregateOutputType | null
  }

  export type ShopOwnerAvgAggregateOutputType = {
    owner_id: number | null
  }

  export type ShopOwnerSumAggregateOutputType = {
    owner_id: number | null
  }

  export type ShopOwnerMinAggregateOutputType = {
    owner_id: number | null
    user_email: string | null
    phone: string | null
    password_hash: string | null
    full_name: string | null
    shop_name: string | null
    is_freelancer: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShopOwnerMaxAggregateOutputType = {
    owner_id: number | null
    user_email: string | null
    phone: string | null
    password_hash: string | null
    full_name: string | null
    shop_name: string | null
    is_freelancer: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ShopOwnerCountAggregateOutputType = {
    owner_id: number
    user_email: number
    phone: number
    password_hash: number
    full_name: number
    shop_name: number
    shop_address: number
    is_freelancer: number
    service_types: number
    bank_account: number
    upi_details: number
    holidays: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ShopOwnerAvgAggregateInputType = {
    owner_id?: true
  }

  export type ShopOwnerSumAggregateInputType = {
    owner_id?: true
  }

  export type ShopOwnerMinAggregateInputType = {
    owner_id?: true
    user_email?: true
    phone?: true
    password_hash?: true
    full_name?: true
    shop_name?: true
    is_freelancer?: true
    created_at?: true
    updated_at?: true
  }

  export type ShopOwnerMaxAggregateInputType = {
    owner_id?: true
    user_email?: true
    phone?: true
    password_hash?: true
    full_name?: true
    shop_name?: true
    is_freelancer?: true
    created_at?: true
    updated_at?: true
  }

  export type ShopOwnerCountAggregateInputType = {
    owner_id?: true
    user_email?: true
    phone?: true
    password_hash?: true
    full_name?: true
    shop_name?: true
    shop_address?: true
    is_freelancer?: true
    service_types?: true
    bank_account?: true
    upi_details?: true
    holidays?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ShopOwnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOwner to aggregate.
     */
    where?: ShopOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOwners to fetch.
     */
    orderBy?: ShopOwnerOrderByWithRelationInput | ShopOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShopOwners
    **/
    _count?: true | ShopOwnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopOwnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopOwnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopOwnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopOwnerMaxAggregateInputType
  }

  export type GetShopOwnerAggregateType<T extends ShopOwnerAggregateArgs> = {
        [P in keyof T & keyof AggregateShopOwner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShopOwner[P]>
      : GetScalarType<T[P], AggregateShopOwner[P]>
  }




  export type ShopOwnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopOwnerWhereInput
    orderBy?: ShopOwnerOrderByWithAggregationInput | ShopOwnerOrderByWithAggregationInput[]
    by: ShopOwnerScalarFieldEnum[] | ShopOwnerScalarFieldEnum
    having?: ShopOwnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopOwnerCountAggregateInputType | true
    _avg?: ShopOwnerAvgAggregateInputType
    _sum?: ShopOwnerSumAggregateInputType
    _min?: ShopOwnerMinAggregateInputType
    _max?: ShopOwnerMaxAggregateInputType
  }

  export type ShopOwnerGroupByOutputType = {
    owner_id: number
    user_email: string
    phone: string
    password_hash: string
    full_name: string | null
    shop_name: string | null
    shop_address: JsonValue | null
    is_freelancer: boolean
    service_types: string[]
    bank_account: JsonValue | null
    upi_details: JsonValue | null
    holidays: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: ShopOwnerCountAggregateOutputType | null
    _avg: ShopOwnerAvgAggregateOutputType | null
    _sum: ShopOwnerSumAggregateOutputType | null
    _min: ShopOwnerMinAggregateOutputType | null
    _max: ShopOwnerMaxAggregateOutputType | null
  }

  type GetShopOwnerGroupByPayload<T extends ShopOwnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopOwnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopOwnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopOwnerGroupByOutputType[P]>
            : GetScalarType<T[P], ShopOwnerGroupByOutputType[P]>
        }
      >
    >


  export type ShopOwnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    owner_id?: boolean
    user_email?: boolean
    phone?: boolean
    password_hash?: boolean
    full_name?: boolean
    shop_name?: boolean
    shop_address?: boolean
    is_freelancer?: boolean
    service_types?: boolean
    bank_account?: boolean
    upi_details?: boolean
    holidays?: boolean
    created_at?: boolean
    updated_at?: boolean
    services?: boolean | ShopOwner$servicesArgs<ExtArgs>
    stylists?: boolean | ShopOwner$stylistsArgs<ExtArgs>
    slots?: boolean | ShopOwner$slotsArgs<ExtArgs>
    bookings?: boolean | ShopOwner$bookingsArgs<ExtArgs>
    files?: boolean | ShopOwner$filesArgs<ExtArgs>
    reviews?: boolean | ShopOwner$reviewsArgs<ExtArgs>
    _count?: boolean | ShopOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shopOwner"]>

  export type ShopOwnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    owner_id?: boolean
    user_email?: boolean
    phone?: boolean
    password_hash?: boolean
    full_name?: boolean
    shop_name?: boolean
    shop_address?: boolean
    is_freelancer?: boolean
    service_types?: boolean
    bank_account?: boolean
    upi_details?: boolean
    holidays?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["shopOwner"]>

  export type ShopOwnerSelectScalar = {
    owner_id?: boolean
    user_email?: boolean
    phone?: boolean
    password_hash?: boolean
    full_name?: boolean
    shop_name?: boolean
    shop_address?: boolean
    is_freelancer?: boolean
    service_types?: boolean
    bank_account?: boolean
    upi_details?: boolean
    holidays?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ShopOwnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | ShopOwner$servicesArgs<ExtArgs>
    stylists?: boolean | ShopOwner$stylistsArgs<ExtArgs>
    slots?: boolean | ShopOwner$slotsArgs<ExtArgs>
    bookings?: boolean | ShopOwner$bookingsArgs<ExtArgs>
    files?: boolean | ShopOwner$filesArgs<ExtArgs>
    reviews?: boolean | ShopOwner$reviewsArgs<ExtArgs>
    _count?: boolean | ShopOwnerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopOwnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopOwnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShopOwner"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      stylists: Prisma.$StylistPayload<ExtArgs>[]
      slots: Prisma.$SlotPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      owner_id: number
      user_email: string
      phone: string
      password_hash: string
      full_name: string | null
      shop_name: string | null
      shop_address: Prisma.JsonValue | null
      is_freelancer: boolean
      service_types: string[]
      bank_account: Prisma.JsonValue | null
      upi_details: Prisma.JsonValue | null
      holidays: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["shopOwner"]>
    composites: {}
  }

  type ShopOwnerGetPayload<S extends boolean | null | undefined | ShopOwnerDefaultArgs> = $Result.GetResult<Prisma.$ShopOwnerPayload, S>

  type ShopOwnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShopOwnerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShopOwnerCountAggregateInputType | true
    }

  export interface ShopOwnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShopOwner'], meta: { name: 'ShopOwner' } }
    /**
     * Find zero or one ShopOwner that matches the filter.
     * @param {ShopOwnerFindUniqueArgs} args - Arguments to find a ShopOwner
     * @example
     * // Get one ShopOwner
     * const shopOwner = await prisma.shopOwner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopOwnerFindUniqueArgs>(args: SelectSubset<T, ShopOwnerFindUniqueArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ShopOwner that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShopOwnerFindUniqueOrThrowArgs} args - Arguments to find a ShopOwner
     * @example
     * // Get one ShopOwner
     * const shopOwner = await prisma.shopOwner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopOwnerFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopOwnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ShopOwner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerFindFirstArgs} args - Arguments to find a ShopOwner
     * @example
     * // Get one ShopOwner
     * const shopOwner = await prisma.shopOwner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopOwnerFindFirstArgs>(args?: SelectSubset<T, ShopOwnerFindFirstArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ShopOwner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerFindFirstOrThrowArgs} args - Arguments to find a ShopOwner
     * @example
     * // Get one ShopOwner
     * const shopOwner = await prisma.shopOwner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopOwnerFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopOwnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ShopOwners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopOwners
     * const shopOwners = await prisma.shopOwner.findMany()
     * 
     * // Get first 10 ShopOwners
     * const shopOwners = await prisma.shopOwner.findMany({ take: 10 })
     * 
     * // Only select the `owner_id`
     * const shopOwnerWithOwner_idOnly = await prisma.shopOwner.findMany({ select: { owner_id: true } })
     * 
     */
    findMany<T extends ShopOwnerFindManyArgs>(args?: SelectSubset<T, ShopOwnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ShopOwner.
     * @param {ShopOwnerCreateArgs} args - Arguments to create a ShopOwner.
     * @example
     * // Create one ShopOwner
     * const ShopOwner = await prisma.shopOwner.create({
     *   data: {
     *     // ... data to create a ShopOwner
     *   }
     * })
     * 
     */
    create<T extends ShopOwnerCreateArgs>(args: SelectSubset<T, ShopOwnerCreateArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ShopOwners.
     * @param {ShopOwnerCreateManyArgs} args - Arguments to create many ShopOwners.
     * @example
     * // Create many ShopOwners
     * const shopOwner = await prisma.shopOwner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopOwnerCreateManyArgs>(args?: SelectSubset<T, ShopOwnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShopOwners and returns the data saved in the database.
     * @param {ShopOwnerCreateManyAndReturnArgs} args - Arguments to create many ShopOwners.
     * @example
     * // Create many ShopOwners
     * const shopOwner = await prisma.shopOwner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShopOwners and only return the `owner_id`
     * const shopOwnerWithOwner_idOnly = await prisma.shopOwner.createManyAndReturn({ 
     *   select: { owner_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopOwnerCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopOwnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ShopOwner.
     * @param {ShopOwnerDeleteArgs} args - Arguments to delete one ShopOwner.
     * @example
     * // Delete one ShopOwner
     * const ShopOwner = await prisma.shopOwner.delete({
     *   where: {
     *     // ... filter to delete one ShopOwner
     *   }
     * })
     * 
     */
    delete<T extends ShopOwnerDeleteArgs>(args: SelectSubset<T, ShopOwnerDeleteArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ShopOwner.
     * @param {ShopOwnerUpdateArgs} args - Arguments to update one ShopOwner.
     * @example
     * // Update one ShopOwner
     * const shopOwner = await prisma.shopOwner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopOwnerUpdateArgs>(args: SelectSubset<T, ShopOwnerUpdateArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ShopOwners.
     * @param {ShopOwnerDeleteManyArgs} args - Arguments to filter ShopOwners to delete.
     * @example
     * // Delete a few ShopOwners
     * const { count } = await prisma.shopOwner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopOwnerDeleteManyArgs>(args?: SelectSubset<T, ShopOwnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShopOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopOwners
     * const shopOwner = await prisma.shopOwner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopOwnerUpdateManyArgs>(args: SelectSubset<T, ShopOwnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShopOwner.
     * @param {ShopOwnerUpsertArgs} args - Arguments to update or create a ShopOwner.
     * @example
     * // Update or create a ShopOwner
     * const shopOwner = await prisma.shopOwner.upsert({
     *   create: {
     *     // ... data to create a ShopOwner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopOwner we want to update
     *   }
     * })
     */
    upsert<T extends ShopOwnerUpsertArgs>(args: SelectSubset<T, ShopOwnerUpsertArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ShopOwners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerCountArgs} args - Arguments to filter ShopOwners to count.
     * @example
     * // Count the number of ShopOwners
     * const count = await prisma.shopOwner.count({
     *   where: {
     *     // ... the filter for the ShopOwners we want to count
     *   }
     * })
    **/
    count<T extends ShopOwnerCountArgs>(
      args?: Subset<T, ShopOwnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopOwnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShopOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopOwnerAggregateArgs>(args: Subset<T, ShopOwnerAggregateArgs>): Prisma.PrismaPromise<GetShopOwnerAggregateType<T>>

    /**
     * Group by ShopOwner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOwnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShopOwnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopOwnerGroupByArgs['orderBy'] }
        : { orderBy?: ShopOwnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShopOwnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopOwnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShopOwner model
   */
  readonly fields: ShopOwnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShopOwner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopOwnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends ShopOwner$servicesArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwner$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    stylists<T extends ShopOwner$stylistsArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwner$stylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findMany"> | Null>
    slots<T extends ShopOwner$slotsArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwner$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends ShopOwner$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwner$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    files<T extends ShopOwner$filesArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwner$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends ShopOwner$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwner$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShopOwner model
   */ 
  interface ShopOwnerFieldRefs {
    readonly owner_id: FieldRef<"ShopOwner", 'Int'>
    readonly user_email: FieldRef<"ShopOwner", 'String'>
    readonly phone: FieldRef<"ShopOwner", 'String'>
    readonly password_hash: FieldRef<"ShopOwner", 'String'>
    readonly full_name: FieldRef<"ShopOwner", 'String'>
    readonly shop_name: FieldRef<"ShopOwner", 'String'>
    readonly shop_address: FieldRef<"ShopOwner", 'Json'>
    readonly is_freelancer: FieldRef<"ShopOwner", 'Boolean'>
    readonly service_types: FieldRef<"ShopOwner", 'String[]'>
    readonly bank_account: FieldRef<"ShopOwner", 'Json'>
    readonly upi_details: FieldRef<"ShopOwner", 'Json'>
    readonly holidays: FieldRef<"ShopOwner", 'Json'>
    readonly created_at: FieldRef<"ShopOwner", 'DateTime'>
    readonly updated_at: FieldRef<"ShopOwner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShopOwner findUnique
   */
  export type ShopOwnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOwner to fetch.
     */
    where: ShopOwnerWhereUniqueInput
  }

  /**
   * ShopOwner findUniqueOrThrow
   */
  export type ShopOwnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOwner to fetch.
     */
    where: ShopOwnerWhereUniqueInput
  }

  /**
   * ShopOwner findFirst
   */
  export type ShopOwnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOwner to fetch.
     */
    where?: ShopOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOwners to fetch.
     */
    orderBy?: ShopOwnerOrderByWithRelationInput | ShopOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopOwners.
     */
    cursor?: ShopOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopOwners.
     */
    distinct?: ShopOwnerScalarFieldEnum | ShopOwnerScalarFieldEnum[]
  }

  /**
   * ShopOwner findFirstOrThrow
   */
  export type ShopOwnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOwner to fetch.
     */
    where?: ShopOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOwners to fetch.
     */
    orderBy?: ShopOwnerOrderByWithRelationInput | ShopOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShopOwners.
     */
    cursor?: ShopOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOwners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShopOwners.
     */
    distinct?: ShopOwnerScalarFieldEnum | ShopOwnerScalarFieldEnum[]
  }

  /**
   * ShopOwner findMany
   */
  export type ShopOwnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * Filter, which ShopOwners to fetch.
     */
    where?: ShopOwnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShopOwners to fetch.
     */
    orderBy?: ShopOwnerOrderByWithRelationInput | ShopOwnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShopOwners.
     */
    cursor?: ShopOwnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShopOwners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShopOwners.
     */
    skip?: number
    distinct?: ShopOwnerScalarFieldEnum | ShopOwnerScalarFieldEnum[]
  }

  /**
   * ShopOwner create
   */
  export type ShopOwnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * The data needed to create a ShopOwner.
     */
    data: XOR<ShopOwnerCreateInput, ShopOwnerUncheckedCreateInput>
  }

  /**
   * ShopOwner createMany
   */
  export type ShopOwnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopOwners.
     */
    data: ShopOwnerCreateManyInput | ShopOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopOwner createManyAndReturn
   */
  export type ShopOwnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ShopOwners.
     */
    data: ShopOwnerCreateManyInput | ShopOwnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShopOwner update
   */
  export type ShopOwnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * The data needed to update a ShopOwner.
     */
    data: XOR<ShopOwnerUpdateInput, ShopOwnerUncheckedUpdateInput>
    /**
     * Choose, which ShopOwner to update.
     */
    where: ShopOwnerWhereUniqueInput
  }

  /**
   * ShopOwner updateMany
   */
  export type ShopOwnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopOwners.
     */
    data: XOR<ShopOwnerUpdateManyMutationInput, ShopOwnerUncheckedUpdateManyInput>
    /**
     * Filter which ShopOwners to update
     */
    where?: ShopOwnerWhereInput
  }

  /**
   * ShopOwner upsert
   */
  export type ShopOwnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * The filter to search for the ShopOwner to update in case it exists.
     */
    where: ShopOwnerWhereUniqueInput
    /**
     * In case the ShopOwner found by the `where` argument doesn't exist, create a new ShopOwner with this data.
     */
    create: XOR<ShopOwnerCreateInput, ShopOwnerUncheckedCreateInput>
    /**
     * In case the ShopOwner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopOwnerUpdateInput, ShopOwnerUncheckedUpdateInput>
  }

  /**
   * ShopOwner delete
   */
  export type ShopOwnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
    /**
     * Filter which ShopOwner to delete.
     */
    where: ShopOwnerWhereUniqueInput
  }

  /**
   * ShopOwner deleteMany
   */
  export type ShopOwnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOwners to delete
     */
    where?: ShopOwnerWhereInput
  }

  /**
   * ShopOwner.services
   */
  export type ShopOwner$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * ShopOwner.stylists
   */
  export type ShopOwner$stylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    where?: StylistWhereInput
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    cursor?: StylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * ShopOwner.slots
   */
  export type ShopOwner$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    where?: SlotWhereInput
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    cursor?: SlotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * ShopOwner.bookings
   */
  export type ShopOwner$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ShopOwner.files
   */
  export type ShopOwner$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * ShopOwner.reviews
   */
  export type ShopOwner$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * ShopOwner without action
   */
  export type ShopOwnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOwner
     */
    select?: ShopOwnerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopOwnerInclude<ExtArgs> | null
  }


  /**
   * Model Stylist
   */

  export type AggregateStylist = {
    _count: StylistCountAggregateOutputType | null
    _avg: StylistAvgAggregateOutputType | null
    _sum: StylistSumAggregateOutputType | null
    _min: StylistMinAggregateOutputType | null
    _max: StylistMaxAggregateOutputType | null
  }

  export type StylistAvgAggregateOutputType = {
    stylist_id: number | null
    owner_id: number | null
  }

  export type StylistSumAggregateOutputType = {
    stylist_id: number | null
    owner_id: number | null
  }

  export type StylistMinAggregateOutputType = {
    stylist_id: number | null
    owner_id: number | null
    name: string | null
    phone: string | null
    created_at: Date | null
  }

  export type StylistMaxAggregateOutputType = {
    stylist_id: number | null
    owner_id: number | null
    name: string | null
    phone: string | null
    created_at: Date | null
  }

  export type StylistCountAggregateOutputType = {
    stylist_id: number
    owner_id: number
    name: number
    specialties: number
    phone: number
    created_at: number
    _all: number
  }


  export type StylistAvgAggregateInputType = {
    stylist_id?: true
    owner_id?: true
  }

  export type StylistSumAggregateInputType = {
    stylist_id?: true
    owner_id?: true
  }

  export type StylistMinAggregateInputType = {
    stylist_id?: true
    owner_id?: true
    name?: true
    phone?: true
    created_at?: true
  }

  export type StylistMaxAggregateInputType = {
    stylist_id?: true
    owner_id?: true
    name?: true
    phone?: true
    created_at?: true
  }

  export type StylistCountAggregateInputType = {
    stylist_id?: true
    owner_id?: true
    name?: true
    specialties?: true
    phone?: true
    created_at?: true
    _all?: true
  }

  export type StylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stylist to aggregate.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stylists
    **/
    _count?: true | StylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StylistMaxAggregateInputType
  }

  export type GetStylistAggregateType<T extends StylistAggregateArgs> = {
        [P in keyof T & keyof AggregateStylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStylist[P]>
      : GetScalarType<T[P], AggregateStylist[P]>
  }




  export type StylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StylistWhereInput
    orderBy?: StylistOrderByWithAggregationInput | StylistOrderByWithAggregationInput[]
    by: StylistScalarFieldEnum[] | StylistScalarFieldEnum
    having?: StylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StylistCountAggregateInputType | true
    _avg?: StylistAvgAggregateInputType
    _sum?: StylistSumAggregateInputType
    _min?: StylistMinAggregateInputType
    _max?: StylistMaxAggregateInputType
  }

  export type StylistGroupByOutputType = {
    stylist_id: number
    owner_id: number
    name: string
    specialties: string[]
    phone: string | null
    created_at: Date
    _count: StylistCountAggregateOutputType | null
    _avg: StylistAvgAggregateOutputType | null
    _sum: StylistSumAggregateOutputType | null
    _min: StylistMinAggregateOutputType | null
    _max: StylistMaxAggregateOutputType | null
  }

  type GetStylistGroupByPayload<T extends StylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StylistGroupByOutputType[P]>
            : GetScalarType<T[P], StylistGroupByOutputType[P]>
        }
      >
    >


  export type StylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stylist_id?: boolean
    owner_id?: boolean
    name?: boolean
    specialties?: boolean
    phone?: boolean
    created_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    bookings?: boolean | Stylist$bookingsArgs<ExtArgs>
    _count?: boolean | StylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stylist"]>

  export type StylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    stylist_id?: boolean
    owner_id?: boolean
    name?: boolean
    specialties?: boolean
    phone?: boolean
    created_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stylist"]>

  export type StylistSelectScalar = {
    stylist_id?: boolean
    owner_id?: boolean
    name?: boolean
    specialties?: boolean
    phone?: boolean
    created_at?: boolean
  }

  export type StylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    bookings?: boolean | Stylist$bookingsArgs<ExtArgs>
    _count?: boolean | StylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }

  export type $StylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stylist"
    objects: {
      owner: Prisma.$ShopOwnerPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      stylist_id: number
      owner_id: number
      name: string
      specialties: string[]
      phone: string | null
      created_at: Date
    }, ExtArgs["result"]["stylist"]>
    composites: {}
  }

  type StylistGetPayload<S extends boolean | null | undefined | StylistDefaultArgs> = $Result.GetResult<Prisma.$StylistPayload, S>

  type StylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StylistFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StylistCountAggregateInputType | true
    }

  export interface StylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stylist'], meta: { name: 'Stylist' } }
    /**
     * Find zero or one Stylist that matches the filter.
     * @param {StylistFindUniqueArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StylistFindUniqueArgs>(args: SelectSubset<T, StylistFindUniqueArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stylist that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StylistFindUniqueOrThrowArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StylistFindUniqueOrThrowArgs>(args: SelectSubset<T, StylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistFindFirstArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StylistFindFirstArgs>(args?: SelectSubset<T, StylistFindFirstArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stylist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistFindFirstOrThrowArgs} args - Arguments to find a Stylist
     * @example
     * // Get one Stylist
     * const stylist = await prisma.stylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StylistFindFirstOrThrowArgs>(args?: SelectSubset<T, StylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stylists
     * const stylists = await prisma.stylist.findMany()
     * 
     * // Get first 10 Stylists
     * const stylists = await prisma.stylist.findMany({ take: 10 })
     * 
     * // Only select the `stylist_id`
     * const stylistWithStylist_idOnly = await prisma.stylist.findMany({ select: { stylist_id: true } })
     * 
     */
    findMany<T extends StylistFindManyArgs>(args?: SelectSubset<T, StylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stylist.
     * @param {StylistCreateArgs} args - Arguments to create a Stylist.
     * @example
     * // Create one Stylist
     * const Stylist = await prisma.stylist.create({
     *   data: {
     *     // ... data to create a Stylist
     *   }
     * })
     * 
     */
    create<T extends StylistCreateArgs>(args: SelectSubset<T, StylistCreateArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stylists.
     * @param {StylistCreateManyArgs} args - Arguments to create many Stylists.
     * @example
     * // Create many Stylists
     * const stylist = await prisma.stylist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StylistCreateManyArgs>(args?: SelectSubset<T, StylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stylists and returns the data saved in the database.
     * @param {StylistCreateManyAndReturnArgs} args - Arguments to create many Stylists.
     * @example
     * // Create many Stylists
     * const stylist = await prisma.stylist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stylists and only return the `stylist_id`
     * const stylistWithStylist_idOnly = await prisma.stylist.createManyAndReturn({ 
     *   select: { stylist_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StylistCreateManyAndReturnArgs>(args?: SelectSubset<T, StylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stylist.
     * @param {StylistDeleteArgs} args - Arguments to delete one Stylist.
     * @example
     * // Delete one Stylist
     * const Stylist = await prisma.stylist.delete({
     *   where: {
     *     // ... filter to delete one Stylist
     *   }
     * })
     * 
     */
    delete<T extends StylistDeleteArgs>(args: SelectSubset<T, StylistDeleteArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stylist.
     * @param {StylistUpdateArgs} args - Arguments to update one Stylist.
     * @example
     * // Update one Stylist
     * const stylist = await prisma.stylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StylistUpdateArgs>(args: SelectSubset<T, StylistUpdateArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stylists.
     * @param {StylistDeleteManyArgs} args - Arguments to filter Stylists to delete.
     * @example
     * // Delete a few Stylists
     * const { count } = await prisma.stylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StylistDeleteManyArgs>(args?: SelectSubset<T, StylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stylists
     * const stylist = await prisma.stylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StylistUpdateManyArgs>(args: SelectSubset<T, StylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stylist.
     * @param {StylistUpsertArgs} args - Arguments to update or create a Stylist.
     * @example
     * // Update or create a Stylist
     * const stylist = await prisma.stylist.upsert({
     *   create: {
     *     // ... data to create a Stylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stylist we want to update
     *   }
     * })
     */
    upsert<T extends StylistUpsertArgs>(args: SelectSubset<T, StylistUpsertArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistCountArgs} args - Arguments to filter Stylists to count.
     * @example
     * // Count the number of Stylists
     * const count = await prisma.stylist.count({
     *   where: {
     *     // ... the filter for the Stylists we want to count
     *   }
     * })
    **/
    count<T extends StylistCountArgs>(
      args?: Subset<T, StylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StylistAggregateArgs>(args: Subset<T, StylistAggregateArgs>): Prisma.PrismaPromise<GetStylistAggregateType<T>>

    /**
     * Group by Stylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StylistGroupByArgs['orderBy'] }
        : { orderBy?: StylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stylist model
   */
  readonly fields: StylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ShopOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwnerDefaultArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bookings<T extends Stylist$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Stylist$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stylist model
   */ 
  interface StylistFieldRefs {
    readonly stylist_id: FieldRef<"Stylist", 'Int'>
    readonly owner_id: FieldRef<"Stylist", 'Int'>
    readonly name: FieldRef<"Stylist", 'String'>
    readonly specialties: FieldRef<"Stylist", 'String[]'>
    readonly phone: FieldRef<"Stylist", 'String'>
    readonly created_at: FieldRef<"Stylist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stylist findUnique
   */
  export type StylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist findUniqueOrThrow
   */
  export type StylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist findFirst
   */
  export type StylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stylists.
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stylists.
     */
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * Stylist findFirstOrThrow
   */
  export type StylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * Filter, which Stylist to fetch.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stylists.
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stylists.
     */
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * Stylist findMany
   */
  export type StylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * Filter, which Stylists to fetch.
     */
    where?: StylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stylists to fetch.
     */
    orderBy?: StylistOrderByWithRelationInput | StylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stylists.
     */
    cursor?: StylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stylists.
     */
    skip?: number
    distinct?: StylistScalarFieldEnum | StylistScalarFieldEnum[]
  }

  /**
   * Stylist create
   */
  export type StylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Stylist.
     */
    data: XOR<StylistCreateInput, StylistUncheckedCreateInput>
  }

  /**
   * Stylist createMany
   */
  export type StylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stylists.
     */
    data: StylistCreateManyInput | StylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stylist createManyAndReturn
   */
  export type StylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stylists.
     */
    data: StylistCreateManyInput | StylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stylist update
   */
  export type StylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Stylist.
     */
    data: XOR<StylistUpdateInput, StylistUncheckedUpdateInput>
    /**
     * Choose, which Stylist to update.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist updateMany
   */
  export type StylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stylists.
     */
    data: XOR<StylistUpdateManyMutationInput, StylistUncheckedUpdateManyInput>
    /**
     * Filter which Stylists to update
     */
    where?: StylistWhereInput
  }

  /**
   * Stylist upsert
   */
  export type StylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Stylist to update in case it exists.
     */
    where: StylistWhereUniqueInput
    /**
     * In case the Stylist found by the `where` argument doesn't exist, create a new Stylist with this data.
     */
    create: XOR<StylistCreateInput, StylistUncheckedCreateInput>
    /**
     * In case the Stylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StylistUpdateInput, StylistUncheckedUpdateInput>
  }

  /**
   * Stylist delete
   */
  export type StylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    /**
     * Filter which Stylist to delete.
     */
    where: StylistWhereUniqueInput
  }

  /**
   * Stylist deleteMany
   */
  export type StylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stylists to delete
     */
    where?: StylistWhereInput
  }

  /**
   * Stylist.bookings
   */
  export type Stylist$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Stylist without action
   */
  export type StylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    service_id: number | null
    owner_id: number | null
    duration_minutes: number | null
    base_price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    service_id: number | null
    owner_id: number | null
    duration_minutes: number | null
    base_price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    service_id: number | null
    owner_id: number | null
    name: string | null
    description: string | null
    duration_minutes: number | null
    base_price: number | null
    gender_type: string | null
    is_home_visit: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    service_id: number | null
    owner_id: number | null
    name: string | null
    description: string | null
    duration_minutes: number | null
    base_price: number | null
    gender_type: string | null
    is_home_visit: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    service_id: number
    owner_id: number
    name: number
    description: number
    duration_minutes: number
    base_price: number
    gender_type: number
    is_home_visit: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    service_id?: true
    owner_id?: true
    duration_minutes?: true
    base_price?: true
  }

  export type ServiceSumAggregateInputType = {
    service_id?: true
    owner_id?: true
    duration_minutes?: true
    base_price?: true
  }

  export type ServiceMinAggregateInputType = {
    service_id?: true
    owner_id?: true
    name?: true
    description?: true
    duration_minutes?: true
    base_price?: true
    gender_type?: true
    is_home_visit?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceMaxAggregateInputType = {
    service_id?: true
    owner_id?: true
    name?: true
    description?: true
    duration_minutes?: true
    base_price?: true
    gender_type?: true
    is_home_visit?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceCountAggregateInputType = {
    service_id?: true
    owner_id?: true
    name?: true
    description?: true
    duration_minutes?: true
    base_price?: true
    gender_type?: true
    is_home_visit?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    service_id: number
    owner_id: number
    name: string
    description: string | null
    duration_minutes: number
    base_price: number
    gender_type: string | null
    is_home_visit: boolean
    created_at: Date
    updated_at: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    duration_minutes?: boolean
    base_price?: boolean
    gender_type?: boolean
    is_home_visit?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    service_id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    duration_minutes?: boolean
    base_price?: boolean
    gender_type?: boolean
    is_home_visit?: boolean
    created_at?: boolean
    updated_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    service_id?: boolean
    owner_id?: boolean
    name?: boolean
    description?: boolean
    duration_minutes?: boolean
    base_price?: boolean
    gender_type?: boolean
    is_home_visit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      owner: Prisma.$ShopOwnerPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      service_id: number
      owner_id: number
      name: string
      description: string | null
      duration_minutes: number
      base_price: number
      gender_type: string | null
      is_home_visit: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `service_id`
     * const serviceWithService_idOnly = await prisma.service.findMany({ select: { service_id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `service_id`
     * const serviceWithService_idOnly = await prisma.service.createManyAndReturn({ 
     *   select: { service_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ShopOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwnerDefaultArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly service_id: FieldRef<"Service", 'Int'>
    readonly owner_id: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly duration_minutes: FieldRef<"Service", 'Int'>
    readonly base_price: FieldRef<"Service", 'Int'>
    readonly gender_type: FieldRef<"Service", 'String'>
    readonly is_home_visit: FieldRef<"Service", 'Boolean'>
    readonly created_at: FieldRef<"Service", 'DateTime'>
    readonly updated_at: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Slot
   */

  export type AggregateSlot = {
    _count: SlotCountAggregateOutputType | null
    _avg: SlotAvgAggregateOutputType | null
    _sum: SlotSumAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  export type SlotAvgAggregateOutputType = {
    slot_id: number | null
    owner_id: number | null
    weekday: number | null
    capacity: number | null
  }

  export type SlotSumAggregateOutputType = {
    slot_id: number | null
    owner_id: number | null
    weekday: number | null
    capacity: number | null
  }

  export type SlotMinAggregateOutputType = {
    slot_id: number | null
    owner_id: number | null
    weekday: number | null
    start_time: Date | null
    end_time: Date | null
    capacity: number | null
    created_at: Date | null
  }

  export type SlotMaxAggregateOutputType = {
    slot_id: number | null
    owner_id: number | null
    weekday: number | null
    start_time: Date | null
    end_time: Date | null
    capacity: number | null
    created_at: Date | null
  }

  export type SlotCountAggregateOutputType = {
    slot_id: number
    owner_id: number
    weekday: number
    start_time: number
    end_time: number
    capacity: number
    created_at: number
    _all: number
  }


  export type SlotAvgAggregateInputType = {
    slot_id?: true
    owner_id?: true
    weekday?: true
    capacity?: true
  }

  export type SlotSumAggregateInputType = {
    slot_id?: true
    owner_id?: true
    weekday?: true
    capacity?: true
  }

  export type SlotMinAggregateInputType = {
    slot_id?: true
    owner_id?: true
    weekday?: true
    start_time?: true
    end_time?: true
    capacity?: true
    created_at?: true
  }

  export type SlotMaxAggregateInputType = {
    slot_id?: true
    owner_id?: true
    weekday?: true
    start_time?: true
    end_time?: true
    capacity?: true
    created_at?: true
  }

  export type SlotCountAggregateInputType = {
    slot_id?: true
    owner_id?: true
    weekday?: true
    start_time?: true
    end_time?: true
    capacity?: true
    created_at?: true
    _all?: true
  }

  export type SlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slot to aggregate.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slots
    **/
    _count?: true | SlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotMaxAggregateInputType
  }

  export type GetSlotAggregateType<T extends SlotAggregateArgs> = {
        [P in keyof T & keyof AggregateSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlot[P]>
      : GetScalarType<T[P], AggregateSlot[P]>
  }




  export type SlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotWhereInput
    orderBy?: SlotOrderByWithAggregationInput | SlotOrderByWithAggregationInput[]
    by: SlotScalarFieldEnum[] | SlotScalarFieldEnum
    having?: SlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotCountAggregateInputType | true
    _avg?: SlotAvgAggregateInputType
    _sum?: SlotSumAggregateInputType
    _min?: SlotMinAggregateInputType
    _max?: SlotMaxAggregateInputType
  }

  export type SlotGroupByOutputType = {
    slot_id: number
    owner_id: number
    weekday: number | null
    start_time: Date
    end_time: Date
    capacity: number
    created_at: Date
    _count: SlotCountAggregateOutputType | null
    _avg: SlotAvgAggregateOutputType | null
    _sum: SlotSumAggregateOutputType | null
    _min: SlotMinAggregateOutputType | null
    _max: SlotMaxAggregateOutputType | null
  }

  type GetSlotGroupByPayload<T extends SlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotGroupByOutputType[P]>
            : GetScalarType<T[P], SlotGroupByOutputType[P]>
        }
      >
    >


  export type SlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slot_id?: boolean
    owner_id?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
    capacity?: boolean
    created_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type SlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    slot_id?: boolean
    owner_id?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
    capacity?: boolean
    created_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slot"]>

  export type SlotSelectScalar = {
    slot_id?: boolean
    owner_id?: boolean
    weekday?: boolean
    start_time?: boolean
    end_time?: boolean
    capacity?: boolean
    created_at?: boolean
  }

  export type SlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }
  export type SlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }

  export type $SlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slot"
    objects: {
      owner: Prisma.$ShopOwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      slot_id: number
      owner_id: number
      weekday: number | null
      start_time: Date
      end_time: Date
      capacity: number
      created_at: Date
    }, ExtArgs["result"]["slot"]>
    composites: {}
  }

  type SlotGetPayload<S extends boolean | null | undefined | SlotDefaultArgs> = $Result.GetResult<Prisma.$SlotPayload, S>

  type SlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SlotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SlotCountAggregateInputType | true
    }

  export interface SlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slot'], meta: { name: 'Slot' } }
    /**
     * Find zero or one Slot that matches the filter.
     * @param {SlotFindUniqueArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotFindUniqueArgs>(args: SelectSubset<T, SlotFindUniqueArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Slot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SlotFindUniqueOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Slot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotFindFirstArgs>(args?: SelectSubset<T, SlotFindFirstArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Slot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindFirstOrThrowArgs} args - Arguments to find a Slot
     * @example
     * // Get one Slot
     * const slot = await prisma.slot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slot.findMany()
     * 
     * // Get first 10 Slots
     * const slots = await prisma.slot.findMany({ take: 10 })
     * 
     * // Only select the `slot_id`
     * const slotWithSlot_idOnly = await prisma.slot.findMany({ select: { slot_id: true } })
     * 
     */
    findMany<T extends SlotFindManyArgs>(args?: SelectSubset<T, SlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Slot.
     * @param {SlotCreateArgs} args - Arguments to create a Slot.
     * @example
     * // Create one Slot
     * const Slot = await prisma.slot.create({
     *   data: {
     *     // ... data to create a Slot
     *   }
     * })
     * 
     */
    create<T extends SlotCreateArgs>(args: SelectSubset<T, SlotCreateArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Slots.
     * @param {SlotCreateManyArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotCreateManyArgs>(args?: SelectSubset<T, SlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Slots and returns the data saved in the database.
     * @param {SlotCreateManyAndReturnArgs} args - Arguments to create many Slots.
     * @example
     * // Create many Slots
     * const slot = await prisma.slot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Slots and only return the `slot_id`
     * const slotWithSlot_idOnly = await prisma.slot.createManyAndReturn({ 
     *   select: { slot_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Slot.
     * @param {SlotDeleteArgs} args - Arguments to delete one Slot.
     * @example
     * // Delete one Slot
     * const Slot = await prisma.slot.delete({
     *   where: {
     *     // ... filter to delete one Slot
     *   }
     * })
     * 
     */
    delete<T extends SlotDeleteArgs>(args: SelectSubset<T, SlotDeleteArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Slot.
     * @param {SlotUpdateArgs} args - Arguments to update one Slot.
     * @example
     * // Update one Slot
     * const slot = await prisma.slot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotUpdateArgs>(args: SelectSubset<T, SlotUpdateArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Slots.
     * @param {SlotDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotDeleteManyArgs>(args?: SelectSubset<T, SlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slot = await prisma.slot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotUpdateManyArgs>(args: SelectSubset<T, SlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Slot.
     * @param {SlotUpsertArgs} args - Arguments to update or create a Slot.
     * @example
     * // Update or create a Slot
     * const slot = await prisma.slot.upsert({
     *   create: {
     *     // ... data to create a Slot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slot we want to update
     *   }
     * })
     */
    upsert<T extends SlotUpsertArgs>(args: SelectSubset<T, SlotUpsertArgs<ExtArgs>>): Prisma__SlotClient<$Result.GetResult<Prisma.$SlotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slot.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
    **/
    count<T extends SlotCountArgs>(
      args?: Subset<T, SlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotAggregateArgs>(args: Subset<T, SlotAggregateArgs>): Prisma.PrismaPromise<GetSlotAggregateType<T>>

    /**
     * Group by Slot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotGroupByArgs['orderBy'] }
        : { orderBy?: SlotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slot model
   */
  readonly fields: SlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ShopOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwnerDefaultArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Slot model
   */ 
  interface SlotFieldRefs {
    readonly slot_id: FieldRef<"Slot", 'Int'>
    readonly owner_id: FieldRef<"Slot", 'Int'>
    readonly weekday: FieldRef<"Slot", 'Int'>
    readonly start_time: FieldRef<"Slot", 'DateTime'>
    readonly end_time: FieldRef<"Slot", 'DateTime'>
    readonly capacity: FieldRef<"Slot", 'Int'>
    readonly created_at: FieldRef<"Slot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Slot findUnique
   */
  export type SlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot findUniqueOrThrow
   */
  export type SlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot findFirst
   */
  export type SlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * Slot findFirstOrThrow
   */
  export type SlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slot to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * Slot findMany
   */
  export type SlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotOrderByWithRelationInput | SlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slots.
     */
    cursor?: SlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    distinct?: SlotScalarFieldEnum | SlotScalarFieldEnum[]
  }

  /**
   * Slot create
   */
  export type SlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The data needed to create a Slot.
     */
    data: XOR<SlotCreateInput, SlotUncheckedCreateInput>
  }

  /**
   * Slot createMany
   */
  export type SlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slots.
     */
    data: SlotCreateManyInput | SlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Slot createManyAndReturn
   */
  export type SlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Slots.
     */
    data: SlotCreateManyInput | SlotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Slot update
   */
  export type SlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The data needed to update a Slot.
     */
    data: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>
    /**
     * Choose, which Slot to update.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot updateMany
   */
  export type SlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotWhereInput
  }

  /**
   * Slot upsert
   */
  export type SlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * The filter to search for the Slot to update in case it exists.
     */
    where: SlotWhereUniqueInput
    /**
     * In case the Slot found by the `where` argument doesn't exist, create a new Slot with this data.
     */
    create: XOR<SlotCreateInput, SlotUncheckedCreateInput>
    /**
     * In case the Slot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotUpdateInput, SlotUncheckedUpdateInput>
  }

  /**
   * Slot delete
   */
  export type SlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
    /**
     * Filter which Slot to delete.
     */
    where: SlotWhereUniqueInput
  }

  /**
   * Slot deleteMany
   */
  export type SlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to delete
     */
    where?: SlotWhereInput
  }

  /**
   * Slot without action
   */
  export type SlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slot
     */
    select?: SlotSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    booking_id: number | null
    customer_id: number | null
    owner_id: number | null
    service_id: number | null
    stylist_id: number | null
  }

  export type BookingSumAggregateOutputType = {
    booking_id: number | null
    customer_id: number | null
    owner_id: number | null
    service_id: number | null
    stylist_id: number | null
  }

  export type BookingMinAggregateOutputType = {
    booking_id: number | null
    booking_ref: string | null
    customer_id: number | null
    owner_id: number | null
    service_id: number | null
    stylist_id: number | null
    appointment_date: Date | null
    appointment_start: Date | null
    appointment_end: Date | null
    status: string | null
    is_home_visit: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    booking_id: number | null
    booking_ref: string | null
    customer_id: number | null
    owner_id: number | null
    service_id: number | null
    stylist_id: number | null
    appointment_date: Date | null
    appointment_start: Date | null
    appointment_end: Date | null
    status: string | null
    is_home_visit: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BookingCountAggregateOutputType = {
    booking_id: number
    booking_ref: number
    customer_id: number
    owner_id: number
    service_id: number
    stylist_id: number
    appointment_date: number
    appointment_start: number
    appointment_end: number
    status: number
    is_home_visit: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    booking_id?: true
    customer_id?: true
    owner_id?: true
    service_id?: true
    stylist_id?: true
  }

  export type BookingSumAggregateInputType = {
    booking_id?: true
    customer_id?: true
    owner_id?: true
    service_id?: true
    stylist_id?: true
  }

  export type BookingMinAggregateInputType = {
    booking_id?: true
    booking_ref?: true
    customer_id?: true
    owner_id?: true
    service_id?: true
    stylist_id?: true
    appointment_date?: true
    appointment_start?: true
    appointment_end?: true
    status?: true
    is_home_visit?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingMaxAggregateInputType = {
    booking_id?: true
    booking_ref?: true
    customer_id?: true
    owner_id?: true
    service_id?: true
    stylist_id?: true
    appointment_date?: true
    appointment_start?: true
    appointment_end?: true
    status?: true
    is_home_visit?: true
    created_at?: true
    updated_at?: true
  }

  export type BookingCountAggregateInputType = {
    booking_id?: true
    booking_ref?: true
    customer_id?: true
    owner_id?: true
    service_id?: true
    stylist_id?: true
    appointment_date?: true
    appointment_start?: true
    appointment_end?: true
    status?: true
    is_home_visit?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    booking_id: number
    booking_ref: string
    customer_id: number | null
    owner_id: number
    service_id: number
    stylist_id: number | null
    appointment_date: Date
    appointment_start: Date
    appointment_end: Date
    status: string
    is_home_visit: boolean
    created_at: Date
    updated_at: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    booking_ref?: boolean
    customer_id?: boolean
    owner_id?: boolean
    service_id?: boolean
    stylist_id?: boolean
    appointment_date?: boolean
    appointment_start?: boolean
    appointment_end?: boolean
    status?: boolean
    is_home_visit?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer?: boolean | Booking$customerArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    stylist?: boolean | Booking$stylistArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    booking_id?: boolean
    booking_ref?: boolean
    customer_id?: boolean
    owner_id?: boolean
    service_id?: boolean
    stylist_id?: boolean
    appointment_date?: boolean
    appointment_start?: boolean
    appointment_end?: boolean
    status?: boolean
    is_home_visit?: boolean
    created_at?: boolean
    updated_at?: boolean
    customer?: boolean | Booking$customerArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    stylist?: boolean | Booking$stylistArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    booking_id?: boolean
    booking_ref?: boolean
    customer_id?: boolean
    owner_id?: boolean
    service_id?: boolean
    stylist_id?: boolean
    appointment_date?: boolean
    appointment_start?: boolean
    appointment_end?: boolean
    status?: boolean
    is_home_visit?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Booking$customerArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    stylist?: boolean | Booking$stylistArgs<ExtArgs>
    payment?: boolean | Booking$paymentArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Booking$customerArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    stylist?: boolean | Booking$stylistArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      owner: Prisma.$ShopOwnerPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      stylist: Prisma.$StylistPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      booking_id: number
      booking_ref: string
      customer_id: number | null
      owner_id: number
      service_id: number
      stylist_id: number | null
      appointment_date: Date
      appointment_start: Date
      appointment_end: Date
      status: string
      is_home_visit: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `booking_id`
     * const bookingWithBooking_idOnly = await prisma.booking.findMany({ select: { booking_id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `booking_id`
     * const bookingWithBooking_idOnly = await prisma.booking.createManyAndReturn({ 
     *   select: { booking_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends Booking$customerArgs<ExtArgs> = {}>(args?: Subset<T, Booking$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    owner<T extends ShopOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwnerDefaultArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stylist<T extends Booking$stylistArgs<ExtArgs> = {}>(args?: Subset<T, Booking$stylistArgs<ExtArgs>>): Prisma__StylistClient<$Result.GetResult<Prisma.$StylistPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    payment<T extends Booking$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly booking_id: FieldRef<"Booking", 'Int'>
    readonly booking_ref: FieldRef<"Booking", 'String'>
    readonly customer_id: FieldRef<"Booking", 'Int'>
    readonly owner_id: FieldRef<"Booking", 'Int'>
    readonly service_id: FieldRef<"Booking", 'Int'>
    readonly stylist_id: FieldRef<"Booking", 'Int'>
    readonly appointment_date: FieldRef<"Booking", 'DateTime'>
    readonly appointment_start: FieldRef<"Booking", 'DateTime'>
    readonly appointment_end: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly is_home_visit: FieldRef<"Booking", 'Boolean'>
    readonly created_at: FieldRef<"Booking", 'DateTime'>
    readonly updated_at: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.customer
   */
  export type Booking$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Booking.stylist
   */
  export type Booking$stylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stylist
     */
    select?: StylistSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StylistInclude<ExtArgs> | null
    where?: StylistWhereInput
  }

  /**
   * Booking.payment
   */
  export type Booking$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    amount: number | null
    currency: string | null
    method: string | null
    status: string | null
    reference: string | null
    created_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    payment_id: number | null
    booking_id: number | null
    amount: number | null
    currency: string | null
    method: string | null
    status: string | null
    reference: string | null
    created_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    payment_id: number
    booking_id: number
    amount: number
    currency: number
    method: number
    status: number
    reference: number
    created_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    reference?: true
    created_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    reference?: true
    created_at?: true
  }

  export type PaymentCountAggregateInputType = {
    payment_id?: true
    booking_id?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    reference?: true
    created_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    payment_id: number
    booking_id: number
    amount: number
    currency: string
    method: string | null
    status: string
    reference: string | null
    created_at: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    created_at?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    payment_id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    created_at?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    payment_id?: boolean
    booking_id?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    created_at?: boolean
  }

  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      payment_id: number
      booking_id: number
      amount: number
      currency: string
      method: string | null
      status: string
      reference: string | null
      created_at: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.findMany({ select: { payment_id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `payment_id`
     * const paymentWithPayment_idOnly = await prisma.payment.createManyAndReturn({ 
     *   select: { payment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly payment_id: FieldRef<"Payment", 'Int'>
    readonly booking_id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Int'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    file_id: number | null
    owner_id: number | null
  }

  export type FileSumAggregateOutputType = {
    file_id: number | null
    owner_id: number | null
  }

  export type FileMinAggregateOutputType = {
    file_id: number | null
    owner_id: number | null
    file_path: string | null
    mime_type: string | null
    created_at: Date | null
  }

  export type FileMaxAggregateOutputType = {
    file_id: number | null
    owner_id: number | null
    file_path: string | null
    mime_type: string | null
    created_at: Date | null
  }

  export type FileCountAggregateOutputType = {
    file_id: number
    owner_id: number
    file_path: number
    mime_type: number
    meta: number
    created_at: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    file_id?: true
    owner_id?: true
  }

  export type FileSumAggregateInputType = {
    file_id?: true
    owner_id?: true
  }

  export type FileMinAggregateInputType = {
    file_id?: true
    owner_id?: true
    file_path?: true
    mime_type?: true
    created_at?: true
  }

  export type FileMaxAggregateInputType = {
    file_id?: true
    owner_id?: true
    file_path?: true
    mime_type?: true
    created_at?: true
  }

  export type FileCountAggregateInputType = {
    file_id?: true
    owner_id?: true
    file_path?: true
    mime_type?: true
    meta?: true
    created_at?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    file_id: number
    owner_id: number
    file_path: string
    mime_type: string | null
    meta: JsonValue | null
    created_at: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    owner_id?: boolean
    file_path?: boolean
    mime_type?: boolean
    meta?: boolean
    created_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    owner_id?: boolean
    file_path?: boolean
    mime_type?: boolean
    meta?: boolean
    created_at?: boolean
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    file_id?: boolean
    owner_id?: boolean
    file_path?: boolean
    mime_type?: boolean
    meta?: boolean
    created_at?: boolean
  }

  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      owner: Prisma.$ShopOwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: number
      owner_id: number
      file_path: string
      mime_type: string | null
      meta: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const fileWithFile_idOnly = await prisma.file.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.createManyAndReturn({ 
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends ShopOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwnerDefaultArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly file_id: FieldRef<"File", 'Int'>
    readonly owner_id: FieldRef<"File", 'Int'>
    readonly file_path: FieldRef<"File", 'String'>
    readonly mime_type: FieldRef<"File", 'String'>
    readonly meta: FieldRef<"File", 'Json'>
    readonly created_at: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    review_id: number | null
    booking_id: number | null
    customer_id: number | null
    owner_id: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    review_id: number | null
    booking_id: number | null
    customer_id: number | null
    owner_id: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    review_id: number | null
    booking_id: number | null
    customer_id: number | null
    owner_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    review_id: number | null
    booking_id: number | null
    customer_id: number | null
    owner_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    review_id: number
    booking_id: number
    customer_id: number
    owner_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    review_id?: true
    booking_id?: true
    customer_id?: true
    owner_id?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    review_id?: true
    booking_id?: true
    customer_id?: true
    owner_id?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    review_id?: true
    booking_id?: true
    customer_id?: true
    owner_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    review_id?: true
    booking_id?: true
    customer_id?: true
    owner_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type ReviewCountAggregateInputType = {
    review_id?: true
    booking_id?: true
    customer_id?: true
    owner_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    review_id: number
    booking_id: number
    customer_id: number
    owner_id: number
    rating: number
    comment: string | null
    created_at: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    booking_id?: boolean
    customer_id?: boolean
    owner_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    review_id?: boolean
    booking_id?: boolean
    customer_id?: boolean
    owner_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    review_id?: boolean
    booking_id?: boolean
    customer_id?: boolean
    owner_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    owner?: boolean | ShopOwnerDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs>
      owner: Prisma.$ShopOwnerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      review_id: number
      booking_id: number
      customer_id: number
      owner_id: number
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.findMany({ select: { review_id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `review_id`
     * const reviewWithReview_idOnly = await prisma.review.createManyAndReturn({ 
     *   select: { review_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    owner<T extends ShopOwnerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopOwnerDefaultArgs<ExtArgs>>): Prisma__ShopOwnerClient<$Result.GetResult<Prisma.$ShopOwnerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly review_id: FieldRef<"Review", 'Int'>
    readonly booking_id: FieldRef<"Review", 'Int'>
    readonly customer_id: FieldRef<"Review", 'Int'>
    readonly owner_id: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
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

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ShopOwnerScalarFieldEnum: {
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

  export type ShopOwnerScalarFieldEnum = (typeof ShopOwnerScalarFieldEnum)[keyof typeof ShopOwnerScalarFieldEnum]


  export const StylistScalarFieldEnum: {
    stylist_id: 'stylist_id',
    owner_id: 'owner_id',
    name: 'name',
    specialties: 'specialties',
    phone: 'phone',
    created_at: 'created_at'
  };

  export type StylistScalarFieldEnum = (typeof StylistScalarFieldEnum)[keyof typeof StylistScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
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

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SlotScalarFieldEnum: {
    slot_id: 'slot_id',
    owner_id: 'owner_id',
    weekday: 'weekday',
    start_time: 'start_time',
    end_time: 'end_time',
    capacity: 'capacity',
    created_at: 'created_at'
  };

  export type SlotScalarFieldEnum = (typeof SlotScalarFieldEnum)[keyof typeof SlotScalarFieldEnum]


  export const BookingScalarFieldEnum: {
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

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    payment_id: 'payment_id',
    booking_id: 'booking_id',
    amount: 'amount',
    currency: 'currency',
    method: 'method',
    status: 'status',
    reference: 'reference',
    created_at: 'created_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const FileScalarFieldEnum: {
    file_id: 'file_id',
    owner_id: 'owner_id',
    file_path: 'file_path',
    mime_type: 'mime_type',
    meta: 'meta',
    created_at: 'created_at'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    review_id: 'review_id',
    booking_id: 'booking_id',
    customer_id: 'customer_id',
    owner_id: 'owner_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    customer_id?: IntFilter<"Customer"> | number
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringNullableFilter<"Customer"> | string | null
    email?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    password_hash?: StringFilter<"Customer"> | string
    gender?: StringNullableFilter<"Customer"> | string | null
    dob?: DateTimeNullableFilter<"Customer"> | Date | string | null
    default_address?: JsonNullableFilter<"Customer">
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    gender?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    default_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    email?: string
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    first_name?: StringFilter<"Customer"> | string
    last_name?: StringNullableFilter<"Customer"> | string | null
    password_hash?: StringFilter<"Customer"> | string
    gender?: StringNullableFilter<"Customer"> | string | null
    dob?: DateTimeNullableFilter<"Customer"> | Date | string | null
    default_address?: JsonNullableFilter<"Customer">
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeFilter<"Customer"> | Date | string
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "customer_id" | "email" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    gender?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    default_address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"Customer"> | number
    first_name?: StringWithAggregatesFilter<"Customer"> | string
    last_name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    password_hash?: StringWithAggregatesFilter<"Customer"> | string
    gender?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null
    default_address?: JsonNullableWithAggregatesFilter<"Customer">
    created_at?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ShopOwnerWhereInput = {
    AND?: ShopOwnerWhereInput | ShopOwnerWhereInput[]
    OR?: ShopOwnerWhereInput[]
    NOT?: ShopOwnerWhereInput | ShopOwnerWhereInput[]
    owner_id?: IntFilter<"ShopOwner"> | number
    user_email?: StringFilter<"ShopOwner"> | string
    phone?: StringFilter<"ShopOwner"> | string
    password_hash?: StringFilter<"ShopOwner"> | string
    full_name?: StringNullableFilter<"ShopOwner"> | string | null
    shop_name?: StringNullableFilter<"ShopOwner"> | string | null
    shop_address?: JsonNullableFilter<"ShopOwner">
    is_freelancer?: BoolFilter<"ShopOwner"> | boolean
    service_types?: StringNullableListFilter<"ShopOwner">
    bank_account?: JsonNullableFilter<"ShopOwner">
    upi_details?: JsonNullableFilter<"ShopOwner">
    holidays?: JsonNullableFilter<"ShopOwner">
    created_at?: DateTimeFilter<"ShopOwner"> | Date | string
    updated_at?: DateTimeFilter<"ShopOwner"> | Date | string
    services?: ServiceListRelationFilter
    stylists?: StylistListRelationFilter
    slots?: SlotListRelationFilter
    bookings?: BookingListRelationFilter
    files?: FileListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type ShopOwnerOrderByWithRelationInput = {
    owner_id?: SortOrder
    user_email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrderInput | SortOrder
    shop_name?: SortOrderInput | SortOrder
    shop_address?: SortOrderInput | SortOrder
    is_freelancer?: SortOrder
    service_types?: SortOrder
    bank_account?: SortOrderInput | SortOrder
    upi_details?: SortOrderInput | SortOrder
    holidays?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    stylists?: StylistOrderByRelationAggregateInput
    slots?: SlotOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type ShopOwnerWhereUniqueInput = Prisma.AtLeast<{
    owner_id?: number
    user_email?: string
    phone?: string
    AND?: ShopOwnerWhereInput | ShopOwnerWhereInput[]
    OR?: ShopOwnerWhereInput[]
    NOT?: ShopOwnerWhereInput | ShopOwnerWhereInput[]
    password_hash?: StringFilter<"ShopOwner"> | string
    full_name?: StringNullableFilter<"ShopOwner"> | string | null
    shop_name?: StringNullableFilter<"ShopOwner"> | string | null
    shop_address?: JsonNullableFilter<"ShopOwner">
    is_freelancer?: BoolFilter<"ShopOwner"> | boolean
    service_types?: StringNullableListFilter<"ShopOwner">
    bank_account?: JsonNullableFilter<"ShopOwner">
    upi_details?: JsonNullableFilter<"ShopOwner">
    holidays?: JsonNullableFilter<"ShopOwner">
    created_at?: DateTimeFilter<"ShopOwner"> | Date | string
    updated_at?: DateTimeFilter<"ShopOwner"> | Date | string
    services?: ServiceListRelationFilter
    stylists?: StylistListRelationFilter
    slots?: SlotListRelationFilter
    bookings?: BookingListRelationFilter
    files?: FileListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "owner_id" | "user_email" | "phone">

  export type ShopOwnerOrderByWithAggregationInput = {
    owner_id?: SortOrder
    user_email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrderInput | SortOrder
    shop_name?: SortOrderInput | SortOrder
    shop_address?: SortOrderInput | SortOrder
    is_freelancer?: SortOrder
    service_types?: SortOrder
    bank_account?: SortOrderInput | SortOrder
    upi_details?: SortOrderInput | SortOrder
    holidays?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ShopOwnerCountOrderByAggregateInput
    _avg?: ShopOwnerAvgOrderByAggregateInput
    _max?: ShopOwnerMaxOrderByAggregateInput
    _min?: ShopOwnerMinOrderByAggregateInput
    _sum?: ShopOwnerSumOrderByAggregateInput
  }

  export type ShopOwnerScalarWhereWithAggregatesInput = {
    AND?: ShopOwnerScalarWhereWithAggregatesInput | ShopOwnerScalarWhereWithAggregatesInput[]
    OR?: ShopOwnerScalarWhereWithAggregatesInput[]
    NOT?: ShopOwnerScalarWhereWithAggregatesInput | ShopOwnerScalarWhereWithAggregatesInput[]
    owner_id?: IntWithAggregatesFilter<"ShopOwner"> | number
    user_email?: StringWithAggregatesFilter<"ShopOwner"> | string
    phone?: StringWithAggregatesFilter<"ShopOwner"> | string
    password_hash?: StringWithAggregatesFilter<"ShopOwner"> | string
    full_name?: StringNullableWithAggregatesFilter<"ShopOwner"> | string | null
    shop_name?: StringNullableWithAggregatesFilter<"ShopOwner"> | string | null
    shop_address?: JsonNullableWithAggregatesFilter<"ShopOwner">
    is_freelancer?: BoolWithAggregatesFilter<"ShopOwner"> | boolean
    service_types?: StringNullableListFilter<"ShopOwner">
    bank_account?: JsonNullableWithAggregatesFilter<"ShopOwner">
    upi_details?: JsonNullableWithAggregatesFilter<"ShopOwner">
    holidays?: JsonNullableWithAggregatesFilter<"ShopOwner">
    created_at?: DateTimeWithAggregatesFilter<"ShopOwner"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ShopOwner"> | Date | string
  }

  export type StylistWhereInput = {
    AND?: StylistWhereInput | StylistWhereInput[]
    OR?: StylistWhereInput[]
    NOT?: StylistWhereInput | StylistWhereInput[]
    stylist_id?: IntFilter<"Stylist"> | number
    owner_id?: IntFilter<"Stylist"> | number
    name?: StringFilter<"Stylist"> | string
    specialties?: StringNullableListFilter<"Stylist">
    phone?: StringNullableFilter<"Stylist"> | string | null
    created_at?: DateTimeFilter<"Stylist"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type StylistOrderByWithRelationInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    specialties?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    owner?: ShopOwnerOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type StylistWhereUniqueInput = Prisma.AtLeast<{
    stylist_id?: number
    AND?: StylistWhereInput | StylistWhereInput[]
    OR?: StylistWhereInput[]
    NOT?: StylistWhereInput | StylistWhereInput[]
    owner_id?: IntFilter<"Stylist"> | number
    name?: StringFilter<"Stylist"> | string
    specialties?: StringNullableListFilter<"Stylist">
    phone?: StringNullableFilter<"Stylist"> | string | null
    created_at?: DateTimeFilter<"Stylist"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
    bookings?: BookingListRelationFilter
  }, "stylist_id">

  export type StylistOrderByWithAggregationInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    specialties?: SortOrder
    phone?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: StylistCountOrderByAggregateInput
    _avg?: StylistAvgOrderByAggregateInput
    _max?: StylistMaxOrderByAggregateInput
    _min?: StylistMinOrderByAggregateInput
    _sum?: StylistSumOrderByAggregateInput
  }

  export type StylistScalarWhereWithAggregatesInput = {
    AND?: StylistScalarWhereWithAggregatesInput | StylistScalarWhereWithAggregatesInput[]
    OR?: StylistScalarWhereWithAggregatesInput[]
    NOT?: StylistScalarWhereWithAggregatesInput | StylistScalarWhereWithAggregatesInput[]
    stylist_id?: IntWithAggregatesFilter<"Stylist"> | number
    owner_id?: IntWithAggregatesFilter<"Stylist"> | number
    name?: StringWithAggregatesFilter<"Stylist"> | string
    specialties?: StringNullableListFilter<"Stylist">
    phone?: StringNullableWithAggregatesFilter<"Stylist"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Stylist"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    service_id?: IntFilter<"Service"> | number
    owner_id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    duration_minutes?: IntFilter<"Service"> | number
    base_price?: IntFilter<"Service"> | number
    gender_type?: StringNullableFilter<"Service"> | string | null
    is_home_visit?: BoolFilter<"Service"> | boolean
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
    bookings?: BookingListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
    gender_type?: SortOrderInput | SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    owner?: ShopOwnerOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    service_id?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    owner_id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    duration_minutes?: IntFilter<"Service"> | number
    base_price?: IntFilter<"Service"> | number
    gender_type?: StringNullableFilter<"Service"> | string | null
    is_home_visit?: BoolFilter<"Service"> | boolean
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
    bookings?: BookingListRelationFilter
  }, "service_id">

  export type ServiceOrderByWithAggregationInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
    gender_type?: SortOrderInput | SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    service_id?: IntWithAggregatesFilter<"Service"> | number
    owner_id?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    duration_minutes?: IntWithAggregatesFilter<"Service"> | number
    base_price?: IntWithAggregatesFilter<"Service"> | number
    gender_type?: StringNullableWithAggregatesFilter<"Service"> | string | null
    is_home_visit?: BoolWithAggregatesFilter<"Service"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type SlotWhereInput = {
    AND?: SlotWhereInput | SlotWhereInput[]
    OR?: SlotWhereInput[]
    NOT?: SlotWhereInput | SlotWhereInput[]
    slot_id?: IntFilter<"Slot"> | number
    owner_id?: IntFilter<"Slot"> | number
    weekday?: IntNullableFilter<"Slot"> | number | null
    start_time?: DateTimeFilter<"Slot"> | Date | string
    end_time?: DateTimeFilter<"Slot"> | Date | string
    capacity?: IntFilter<"Slot"> | number
    created_at?: DateTimeFilter<"Slot"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
  }

  export type SlotOrderByWithRelationInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    owner?: ShopOwnerOrderByWithRelationInput
  }

  export type SlotWhereUniqueInput = Prisma.AtLeast<{
    slot_id?: number
    AND?: SlotWhereInput | SlotWhereInput[]
    OR?: SlotWhereInput[]
    NOT?: SlotWhereInput | SlotWhereInput[]
    owner_id?: IntFilter<"Slot"> | number
    weekday?: IntNullableFilter<"Slot"> | number | null
    start_time?: DateTimeFilter<"Slot"> | Date | string
    end_time?: DateTimeFilter<"Slot"> | Date | string
    capacity?: IntFilter<"Slot"> | number
    created_at?: DateTimeFilter<"Slot"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
  }, "slot_id">

  export type SlotOrderByWithAggregationInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
    _count?: SlotCountOrderByAggregateInput
    _avg?: SlotAvgOrderByAggregateInput
    _max?: SlotMaxOrderByAggregateInput
    _min?: SlotMinOrderByAggregateInput
    _sum?: SlotSumOrderByAggregateInput
  }

  export type SlotScalarWhereWithAggregatesInput = {
    AND?: SlotScalarWhereWithAggregatesInput | SlotScalarWhereWithAggregatesInput[]
    OR?: SlotScalarWhereWithAggregatesInput[]
    NOT?: SlotScalarWhereWithAggregatesInput | SlotScalarWhereWithAggregatesInput[]
    slot_id?: IntWithAggregatesFilter<"Slot"> | number
    owner_id?: IntWithAggregatesFilter<"Slot"> | number
    weekday?: IntNullableWithAggregatesFilter<"Slot"> | number | null
    start_time?: DateTimeWithAggregatesFilter<"Slot"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Slot"> | Date | string
    capacity?: IntWithAggregatesFilter<"Slot"> | number
    created_at?: DateTimeWithAggregatesFilter<"Slot"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    booking_id?: IntFilter<"Booking"> | number
    booking_ref?: StringFilter<"Booking"> | string
    customer_id?: IntNullableFilter<"Booking"> | number | null
    owner_id?: IntFilter<"Booking"> | number
    service_id?: IntFilter<"Booking"> | number
    stylist_id?: IntNullableFilter<"Booking"> | number | null
    appointment_date?: DateTimeFilter<"Booking"> | Date | string
    appointment_start?: DateTimeFilter<"Booking"> | Date | string
    appointment_end?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    is_home_visit?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    stylist?: XOR<StylistNullableRelationFilter, StylistWhereInput> | null
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    booking_id?: SortOrder
    booking_ref?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrderInput | SortOrder
    appointment_date?: SortOrder
    appointment_start?: SortOrder
    appointment_end?: SortOrder
    status?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    owner?: ShopOwnerOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    stylist?: StylistOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    booking_id?: number
    booking_ref?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    customer_id?: IntNullableFilter<"Booking"> | number | null
    owner_id?: IntFilter<"Booking"> | number
    service_id?: IntFilter<"Booking"> | number
    stylist_id?: IntNullableFilter<"Booking"> | number | null
    appointment_date?: DateTimeFilter<"Booking"> | Date | string
    appointment_start?: DateTimeFilter<"Booking"> | Date | string
    appointment_end?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    is_home_visit?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
    customer?: XOR<CustomerNullableRelationFilter, CustomerWhereInput> | null
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    stylist?: XOR<StylistNullableRelationFilter, StylistWhereInput> | null
    payment?: XOR<PaymentNullableRelationFilter, PaymentWhereInput> | null
    review?: XOR<ReviewNullableRelationFilter, ReviewWhereInput> | null
  }, "booking_id" | "booking_ref">

  export type BookingOrderByWithAggregationInput = {
    booking_id?: SortOrder
    booking_ref?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrderInput | SortOrder
    appointment_date?: SortOrder
    appointment_start?: SortOrder
    appointment_end?: SortOrder
    status?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    booking_id?: IntWithAggregatesFilter<"Booking"> | number
    booking_ref?: StringWithAggregatesFilter<"Booking"> | string
    customer_id?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    owner_id?: IntWithAggregatesFilter<"Booking"> | number
    service_id?: IntWithAggregatesFilter<"Booking"> | number
    stylist_id?: IntNullableWithAggregatesFilter<"Booking"> | number | null
    appointment_date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    appointment_start?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    appointment_end?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: StringWithAggregatesFilter<"Booking"> | string
    is_home_visit?: BoolWithAggregatesFilter<"Booking"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    payment_id?: IntFilter<"Payment"> | number
    booking_id?: IntFilter<"Payment"> | number
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrderInput | SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    created_at?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    payment_id?: number
    booking_id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: IntFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    method?: StringNullableFilter<"Payment"> | string | null
    status?: StringFilter<"Payment"> | string
    reference?: StringNullableFilter<"Payment"> | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }, "payment_id" | "booking_id">

  export type PaymentOrderByWithAggregationInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrderInput | SortOrder
    status?: SortOrder
    reference?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    payment_id?: IntWithAggregatesFilter<"Payment"> | number
    booking_id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: IntWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: StringWithAggregatesFilter<"Payment"> | string
    reference?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    file_id?: IntFilter<"File"> | number
    owner_id?: IntFilter<"File"> | number
    file_path?: StringFilter<"File"> | string
    mime_type?: StringNullableFilter<"File"> | string | null
    meta?: JsonNullableFilter<"File">
    created_at?: DateTimeFilter<"File"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    created_at?: SortOrder
    owner?: ShopOwnerOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    owner_id?: IntFilter<"File"> | number
    file_path?: StringFilter<"File"> | string
    mime_type?: StringNullableFilter<"File"> | string | null
    meta?: JsonNullableFilter<"File">
    created_at?: DateTimeFilter<"File"> | Date | string
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
  }, "file_id">

  export type FileOrderByWithAggregationInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrderInput | SortOrder
    meta?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    file_id?: IntWithAggregatesFilter<"File"> | number
    owner_id?: IntWithAggregatesFilter<"File"> | number
    file_path?: StringWithAggregatesFilter<"File"> | string
    mime_type?: StringNullableWithAggregatesFilter<"File"> | string | null
    meta?: JsonNullableWithAggregatesFilter<"File">
    created_at?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    review_id?: IntFilter<"Review"> | number
    booking_id?: IntFilter<"Review"> | number
    customer_id?: IntFilter<"Review"> | number
    owner_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    booking?: BookingOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    owner?: ShopOwnerOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    review_id?: number
    booking_id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    customer_id?: IntFilter<"Review"> | number
    owner_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    owner?: XOR<ShopOwnerRelationFilter, ShopOwnerWhereInput>
  }, "review_id" | "booking_id">

  export type ReviewOrderByWithAggregationInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    review_id?: IntWithAggregatesFilter<"Review"> | number
    booking_id?: IntWithAggregatesFilter<"Review"> | number
    customer_id?: IntWithAggregatesFilter<"Review"> | number
    owner_id?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type CustomerCreateInput = {
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutCustomerInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    customer_id?: number
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    customer_id?: number
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopOwnerCreateInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceCreateNestedManyWithoutOwnerInput
    stylists?: StylistCreateNestedManyWithoutOwnerInput
    slots?: SlotCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutOwnerInput
    files?: FileCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOwnerInput
    stylists?: StylistUncheckedCreateNestedManyWithoutOwnerInput
    slots?: SlotUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUpdateInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUpdateManyWithoutOwnerNestedInput
    slots?: SlotUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutOwnerNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUncheckedUpdateManyWithoutOwnerNestedInput
    slots?: SlotUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerCreateManyInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ShopOwnerUpdateManyMutationInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopOwnerUncheckedUpdateManyInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistCreateInput = {
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutStylistsInput
    bookings?: BookingCreateNestedManyWithoutStylistInput
  }

  export type StylistUncheckedCreateInput = {
    stylist_id?: number
    owner_id: number
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutStylistInput
  }

  export type StylistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutStylistsNestedInput
    bookings?: BookingUpdateManyWithoutStylistNestedInput
  }

  export type StylistUncheckedUpdateInput = {
    stylist_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutStylistNestedInput
  }

  export type StylistCreateManyInput = {
    stylist_id?: number
    owner_id: number
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
  }

  export type StylistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistUncheckedUpdateManyInput = {
    stylist_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    service_id?: number
    owner_id: number
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    service_id?: number
    owner_id: number
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotCreateInput = {
    weekday?: number | null
    start_time: Date | string
    end_time: Date | string
    capacity?: number
    created_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutSlotsInput
  }

  export type SlotUncheckedCreateInput = {
    slot_id?: number
    owner_id: number
    weekday?: number | null
    start_time: Date | string
    end_time: Date | string
    capacity?: number
    created_at?: Date | string
  }

  export type SlotUpdateInput = {
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutSlotsNestedInput
  }

  export type SlotUncheckedUpdateInput = {
    slot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotCreateManyInput = {
    slot_id?: number
    owner_id: number
    weekday?: number | null
    start_time: Date | string
    end_time: Date | string
    capacity?: number
    created_at?: Date | string
  }

  export type SlotUpdateManyMutationInput = {
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotUncheckedUpdateManyInput = {
    slot_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    owner: ShopOwnerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    stylist?: StylistCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    stylist?: StylistUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    currency?: string
    method?: string | null
    status?: string
    reference?: string | null
    created_at?: Date | string
    booking: BookingCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    payment_id?: number
    booking_id: number
    amount: number
    currency?: string
    method?: string | null
    status?: string
    reference?: string | null
    created_at?: Date | string
  }

  export type PaymentUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    payment_id?: number
    booking_id: number
    amount: number
    currency?: string
    method?: string | null
    status?: string
    reference?: string | null
    created_at?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    file_path: string
    mime_type?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    file_id?: number
    owner_id: number
    file_path: string
    mime_type?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type FileUpdateInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateManyInput = {
    file_id?: number
    owner_id: number
    file_path: string
    mime_type?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    customer: CustomerCreateNestedOneWithoutReviewsInput
    owner: ShopOwnerCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    review_id?: number
    booking_id: number
    customer_id: number
    owner_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    customer?: CustomerUpdateOneRequiredWithoutReviewsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    review_id?: number
    booking_id: number
    customer_id: number
    owner_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    default_address?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type StylistListRelationFilter = {
    every?: StylistWhereInput
    some?: StylistWhereInput
    none?: StylistWhereInput
  }

  export type SlotListRelationFilter = {
    every?: SlotWhereInput
    some?: SlotWhereInput
    none?: SlotWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOwnerCountOrderByAggregateInput = {
    owner_id?: SortOrder
    user_email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    shop_name?: SortOrder
    shop_address?: SortOrder
    is_freelancer?: SortOrder
    service_types?: SortOrder
    bank_account?: SortOrder
    upi_details?: SortOrder
    holidays?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopOwnerAvgOrderByAggregateInput = {
    owner_id?: SortOrder
  }

  export type ShopOwnerMaxOrderByAggregateInput = {
    owner_id?: SortOrder
    user_email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    shop_name?: SortOrder
    is_freelancer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopOwnerMinOrderByAggregateInput = {
    owner_id?: SortOrder
    user_email?: SortOrder
    phone?: SortOrder
    password_hash?: SortOrder
    full_name?: SortOrder
    shop_name?: SortOrder
    is_freelancer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ShopOwnerSumOrderByAggregateInput = {
    owner_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ShopOwnerRelationFilter = {
    is?: ShopOwnerWhereInput
    isNot?: ShopOwnerWhereInput
  }

  export type StylistCountOrderByAggregateInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    specialties?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StylistAvgOrderByAggregateInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
  }

  export type StylistMaxOrderByAggregateInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StylistMinOrderByAggregateInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    created_at?: SortOrder
  }

  export type StylistSumOrderByAggregateInput = {
    stylist_id?: SortOrder
    owner_id?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
    gender_type?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
    gender_type?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
    gender_type?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    service_id?: SortOrder
    owner_id?: SortOrder
    duration_minutes?: SortOrder
    base_price?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SlotCountOrderByAggregateInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
  }

  export type SlotAvgOrderByAggregateInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrder
    capacity?: SortOrder
  }

  export type SlotMaxOrderByAggregateInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
  }

  export type SlotMinOrderByAggregateInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    capacity?: SortOrder
    created_at?: SortOrder
  }

  export type SlotSumOrderByAggregateInput = {
    slot_id?: SortOrder
    owner_id?: SortOrder
    weekday?: SortOrder
    capacity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CustomerNullableRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type StylistNullableRelationFilter = {
    is?: StylistWhereInput | null
    isNot?: StylistWhereInput | null
  }

  export type PaymentNullableRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type ReviewNullableRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type BookingCountOrderByAggregateInput = {
    booking_id?: SortOrder
    booking_ref?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrder
    appointment_date?: SortOrder
    appointment_start?: SortOrder
    appointment_end?: SortOrder
    status?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    booking_id?: SortOrder
    booking_ref?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrder
    appointment_date?: SortOrder
    appointment_start?: SortOrder
    appointment_end?: SortOrder
    status?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    booking_id?: SortOrder
    booking_ref?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrder
    appointment_date?: SortOrder
    appointment_start?: SortOrder
    appointment_end?: SortOrder
    status?: SortOrder
    is_home_visit?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    service_id?: SortOrder
    stylist_id?: SortOrder
  }

  export type BookingRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    created_at?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    payment_id?: SortOrder
    booking_id?: SortOrder
    amount?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrder
    meta?: SortOrder
    created_at?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrder
    created_at?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
    file_path?: SortOrder
    mime_type?: SortOrder
    created_at?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    file_id?: SortOrder
    owner_id?: SortOrder
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    review_id?: SortOrder
    booking_id?: SortOrder
    customer_id?: SortOrder
    owner_id?: SortOrder
    rating?: SortOrder
  }

  export type BookingCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BookingUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookingUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput> | BookingCreateWithoutCustomerInput[] | BookingUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutCustomerInput | BookingCreateOrConnectWithoutCustomerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutCustomerInput | BookingUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: BookingCreateManyCustomerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutCustomerInput | BookingUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutCustomerInput | BookingUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ShopOwnerCreateservice_typesInput = {
    set: string[]
  }

  export type ServiceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ServiceCreateWithoutOwnerInput, ServiceUncheckedCreateWithoutOwnerInput> | ServiceCreateWithoutOwnerInput[] | ServiceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOwnerInput | ServiceCreateOrConnectWithoutOwnerInput[]
    createMany?: ServiceCreateManyOwnerInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StylistCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StylistCreateWithoutOwnerInput, StylistUncheckedCreateWithoutOwnerInput> | StylistCreateWithoutOwnerInput[] | StylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StylistCreateOrConnectWithoutOwnerInput | StylistCreateOrConnectWithoutOwnerInput[]
    createMany?: StylistCreateManyOwnerInputEnvelope
    connect?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
  }

  export type SlotCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SlotCreateWithoutOwnerInput, SlotUncheckedCreateWithoutOwnerInput> | SlotCreateWithoutOwnerInput[] | SlotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutOwnerInput | SlotCreateOrConnectWithoutOwnerInput[]
    createMany?: SlotCreateManyOwnerInputEnvelope
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ReviewCreateWithoutOwnerInput, ReviewUncheckedCreateWithoutOwnerInput> | ReviewCreateWithoutOwnerInput[] | ReviewUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOwnerInput | ReviewCreateOrConnectWithoutOwnerInput[]
    createMany?: ReviewCreateManyOwnerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ServiceCreateWithoutOwnerInput, ServiceUncheckedCreateWithoutOwnerInput> | ServiceCreateWithoutOwnerInput[] | ServiceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOwnerInput | ServiceCreateOrConnectWithoutOwnerInput[]
    createMany?: ServiceCreateManyOwnerInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StylistUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<StylistCreateWithoutOwnerInput, StylistUncheckedCreateWithoutOwnerInput> | StylistCreateWithoutOwnerInput[] | StylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StylistCreateOrConnectWithoutOwnerInput | StylistCreateOrConnectWithoutOwnerInput[]
    createMany?: StylistCreateManyOwnerInputEnvelope
    connect?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
  }

  export type SlotUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SlotCreateWithoutOwnerInput, SlotUncheckedCreateWithoutOwnerInput> | SlotCreateWithoutOwnerInput[] | SlotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutOwnerInput | SlotCreateOrConnectWithoutOwnerInput[]
    createMany?: SlotCreateManyOwnerInputEnvelope
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ReviewCreateWithoutOwnerInput, ReviewUncheckedCreateWithoutOwnerInput> | ReviewCreateWithoutOwnerInput[] | ReviewUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOwnerInput | ReviewCreateOrConnectWithoutOwnerInput[]
    createMany?: ReviewCreateManyOwnerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ShopOwnerUpdateservice_typesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ServiceCreateWithoutOwnerInput, ServiceUncheckedCreateWithoutOwnerInput> | ServiceCreateWithoutOwnerInput[] | ServiceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOwnerInput | ServiceCreateOrConnectWithoutOwnerInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutOwnerInput | ServiceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ServiceCreateManyOwnerInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutOwnerInput | ServiceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutOwnerInput | ServiceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type StylistUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StylistCreateWithoutOwnerInput, StylistUncheckedCreateWithoutOwnerInput> | StylistCreateWithoutOwnerInput[] | StylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StylistCreateOrConnectWithoutOwnerInput | StylistCreateOrConnectWithoutOwnerInput[]
    upsert?: StylistUpsertWithWhereUniqueWithoutOwnerInput | StylistUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StylistCreateManyOwnerInputEnvelope
    set?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    disconnect?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    delete?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    connect?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    update?: StylistUpdateWithWhereUniqueWithoutOwnerInput | StylistUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StylistUpdateManyWithWhereWithoutOwnerInput | StylistUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StylistScalarWhereInput | StylistScalarWhereInput[]
  }

  export type SlotUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SlotCreateWithoutOwnerInput, SlotUncheckedCreateWithoutOwnerInput> | SlotCreateWithoutOwnerInput[] | SlotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutOwnerInput | SlotCreateOrConnectWithoutOwnerInput[]
    upsert?: SlotUpsertWithWhereUniqueWithoutOwnerInput | SlotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SlotCreateManyOwnerInputEnvelope
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    update?: SlotUpdateWithWhereUniqueWithoutOwnerInput | SlotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SlotUpdateManyWithWhereWithoutOwnerInput | SlotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOwnerInput | BookingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOwnerInput | BookingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOwnerInput | BookingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type FileUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutOwnerInput | FileUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutOwnerInput | FileUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FileUpdateManyWithWhereWithoutOwnerInput | FileUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ReviewCreateWithoutOwnerInput, ReviewUncheckedCreateWithoutOwnerInput> | ReviewCreateWithoutOwnerInput[] | ReviewUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOwnerInput | ReviewCreateOrConnectWithoutOwnerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutOwnerInput | ReviewUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ReviewCreateManyOwnerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutOwnerInput | ReviewUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutOwnerInput | ReviewUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ServiceCreateWithoutOwnerInput, ServiceUncheckedCreateWithoutOwnerInput> | ServiceCreateWithoutOwnerInput[] | ServiceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutOwnerInput | ServiceCreateOrConnectWithoutOwnerInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutOwnerInput | ServiceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ServiceCreateManyOwnerInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutOwnerInput | ServiceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutOwnerInput | ServiceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type StylistUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<StylistCreateWithoutOwnerInput, StylistUncheckedCreateWithoutOwnerInput> | StylistCreateWithoutOwnerInput[] | StylistUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: StylistCreateOrConnectWithoutOwnerInput | StylistCreateOrConnectWithoutOwnerInput[]
    upsert?: StylistUpsertWithWhereUniqueWithoutOwnerInput | StylistUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: StylistCreateManyOwnerInputEnvelope
    set?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    disconnect?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    delete?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    connect?: StylistWhereUniqueInput | StylistWhereUniqueInput[]
    update?: StylistUpdateWithWhereUniqueWithoutOwnerInput | StylistUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: StylistUpdateManyWithWhereWithoutOwnerInput | StylistUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: StylistScalarWhereInput | StylistScalarWhereInput[]
  }

  export type SlotUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SlotCreateWithoutOwnerInput, SlotUncheckedCreateWithoutOwnerInput> | SlotCreateWithoutOwnerInput[] | SlotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SlotCreateOrConnectWithoutOwnerInput | SlotCreateOrConnectWithoutOwnerInput[]
    upsert?: SlotUpsertWithWhereUniqueWithoutOwnerInput | SlotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SlotCreateManyOwnerInputEnvelope
    set?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    disconnect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    delete?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    connect?: SlotWhereUniqueInput | SlotWhereUniqueInput[]
    update?: SlotUpdateWithWhereUniqueWithoutOwnerInput | SlotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SlotUpdateManyWithWhereWithoutOwnerInput | SlotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SlotScalarWhereInput | SlotScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput> | BookingCreateWithoutOwnerInput[] | BookingUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutOwnerInput | BookingCreateOrConnectWithoutOwnerInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutOwnerInput | BookingUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: BookingCreateManyOwnerInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutOwnerInput | BookingUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutOwnerInput | BookingUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput> | FileCreateWithoutOwnerInput[] | FileUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: FileCreateOrConnectWithoutOwnerInput | FileCreateOrConnectWithoutOwnerInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutOwnerInput | FileUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: FileCreateManyOwnerInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutOwnerInput | FileUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: FileUpdateManyWithWhereWithoutOwnerInput | FileUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ReviewCreateWithoutOwnerInput, ReviewUncheckedCreateWithoutOwnerInput> | ReviewCreateWithoutOwnerInput[] | ReviewUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOwnerInput | ReviewCreateOrConnectWithoutOwnerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutOwnerInput | ReviewUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ReviewCreateManyOwnerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutOwnerInput | ReviewUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutOwnerInput | ReviewUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type StylistCreatespecialtiesInput = {
    set: string[]
  }

  export type ShopOwnerCreateNestedOneWithoutStylistsInput = {
    create?: XOR<ShopOwnerCreateWithoutStylistsInput, ShopOwnerUncheckedCreateWithoutStylistsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutStylistsInput
    connect?: ShopOwnerWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutStylistInput = {
    create?: XOR<BookingCreateWithoutStylistInput, BookingUncheckedCreateWithoutStylistInput> | BookingCreateWithoutStylistInput[] | BookingUncheckedCreateWithoutStylistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStylistInput | BookingCreateOrConnectWithoutStylistInput[]
    createMany?: BookingCreateManyStylistInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutStylistInput = {
    create?: XOR<BookingCreateWithoutStylistInput, BookingUncheckedCreateWithoutStylistInput> | BookingCreateWithoutStylistInput[] | BookingUncheckedCreateWithoutStylistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStylistInput | BookingCreateOrConnectWithoutStylistInput[]
    createMany?: BookingCreateManyStylistInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StylistUpdatespecialtiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ShopOwnerUpdateOneRequiredWithoutStylistsNestedInput = {
    create?: XOR<ShopOwnerCreateWithoutStylistsInput, ShopOwnerUncheckedCreateWithoutStylistsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutStylistsInput
    upsert?: ShopOwnerUpsertWithoutStylistsInput
    connect?: ShopOwnerWhereUniqueInput
    update?: XOR<XOR<ShopOwnerUpdateToOneWithWhereWithoutStylistsInput, ShopOwnerUpdateWithoutStylistsInput>, ShopOwnerUncheckedUpdateWithoutStylistsInput>
  }

  export type BookingUpdateManyWithoutStylistNestedInput = {
    create?: XOR<BookingCreateWithoutStylistInput, BookingUncheckedCreateWithoutStylistInput> | BookingCreateWithoutStylistInput[] | BookingUncheckedCreateWithoutStylistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStylistInput | BookingCreateOrConnectWithoutStylistInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutStylistInput | BookingUpsertWithWhereUniqueWithoutStylistInput[]
    createMany?: BookingCreateManyStylistInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutStylistInput | BookingUpdateWithWhereUniqueWithoutStylistInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutStylistInput | BookingUpdateManyWithWhereWithoutStylistInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutStylistNestedInput = {
    create?: XOR<BookingCreateWithoutStylistInput, BookingUncheckedCreateWithoutStylistInput> | BookingCreateWithoutStylistInput[] | BookingUncheckedCreateWithoutStylistInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutStylistInput | BookingCreateOrConnectWithoutStylistInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutStylistInput | BookingUpsertWithWhereUniqueWithoutStylistInput[]
    createMany?: BookingCreateManyStylistInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutStylistInput | BookingUpdateWithWhereUniqueWithoutStylistInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutStylistInput | BookingUpdateManyWithWhereWithoutStylistInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopOwnerCreateNestedOneWithoutServicesInput = {
    create?: XOR<ShopOwnerCreateWithoutServicesInput, ShopOwnerUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutServicesInput
    connect?: ShopOwnerWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ShopOwnerUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<ShopOwnerCreateWithoutServicesInput, ShopOwnerUncheckedCreateWithoutServicesInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutServicesInput
    upsert?: ShopOwnerUpsertWithoutServicesInput
    connect?: ShopOwnerWhereUniqueInput
    update?: XOR<XOR<ShopOwnerUpdateToOneWithWhereWithoutServicesInput, ShopOwnerUpdateWithoutServicesInput>, ShopOwnerUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput> | BookingCreateWithoutServiceInput[] | BookingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServiceInput | BookingCreateOrConnectWithoutServiceInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServiceInput | BookingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: BookingCreateManyServiceInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServiceInput | BookingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServiceInput | BookingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ShopOwnerCreateNestedOneWithoutSlotsInput = {
    create?: XOR<ShopOwnerCreateWithoutSlotsInput, ShopOwnerUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutSlotsInput
    connect?: ShopOwnerWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShopOwnerUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<ShopOwnerCreateWithoutSlotsInput, ShopOwnerUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutSlotsInput
    upsert?: ShopOwnerUpsertWithoutSlotsInput
    connect?: ShopOwnerWhereUniqueInput
    update?: XOR<XOR<ShopOwnerUpdateToOneWithWhereWithoutSlotsInput, ShopOwnerUpdateWithoutSlotsInput>, ShopOwnerUncheckedUpdateWithoutSlotsInput>
  }

  export type CustomerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ShopOwnerCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ShopOwnerCreateWithoutBookingsInput, ShopOwnerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutBookingsInput
    connect?: ShopOwnerWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
  }

  export type StylistCreateNestedOneWithoutBookingsInput = {
    create?: XOR<StylistCreateWithoutBookingsInput, StylistUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: StylistCreateOrConnectWithoutBookingsInput
    connect?: StylistWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    connect?: PaymentWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutBookingsInput
    upsert?: CustomerUpsertWithoutBookingsInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutBookingsInput, CustomerUpdateWithoutBookingsInput>, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ShopOwnerCreateWithoutBookingsInput, ShopOwnerUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutBookingsInput
    upsert?: ShopOwnerUpsertWithoutBookingsInput
    connect?: ShopOwnerWhereUniqueInput
    update?: XOR<XOR<ShopOwnerUpdateToOneWithWhereWithoutBookingsInput, ShopOwnerUpdateWithoutBookingsInput>, ShopOwnerUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput
    upsert?: ServiceUpsertWithoutBookingsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutBookingsInput, ServiceUpdateWithoutBookingsInput>, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type StylistUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<StylistCreateWithoutBookingsInput, StylistUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: StylistCreateOrConnectWithoutBookingsInput
    upsert?: StylistUpsertWithoutBookingsInput
    disconnect?: StylistWhereInput | boolean
    delete?: StylistWhereInput | boolean
    connect?: StylistWhereUniqueInput
    update?: XOR<XOR<StylistUpdateToOneWithWhereWithoutBookingsInput, StylistUpdateWithoutBookingsInput>, StylistUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutBookingInput
    upsert?: PaymentUpsertWithoutBookingInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutBookingInput, PaymentUpdateWithoutBookingInput>, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutPaymentInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentInput
    upsert?: BookingUpsertWithoutPaymentInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentInput, BookingUpdateWithoutPaymentInput>, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type ShopOwnerCreateNestedOneWithoutFilesInput = {
    create?: XOR<ShopOwnerCreateWithoutFilesInput, ShopOwnerUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutFilesInput
    connect?: ShopOwnerWhereUniqueInput
  }

  export type ShopOwnerUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<ShopOwnerCreateWithoutFilesInput, ShopOwnerUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutFilesInput
    upsert?: ShopOwnerUpsertWithoutFilesInput
    connect?: ShopOwnerWhereUniqueInput
    update?: XOR<XOR<ShopOwnerUpdateToOneWithWhereWithoutFilesInput, ShopOwnerUpdateWithoutFilesInput>, ShopOwnerUncheckedUpdateWithoutFilesInput>
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutReviewsInput = {
    create?: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewsInput
    connect?: CustomerWhereUniqueInput
  }

  export type ShopOwnerCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ShopOwnerCreateWithoutReviewsInput, ShopOwnerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutReviewsInput
    connect?: ShopOwnerWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type CustomerUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutReviewsInput
    upsert?: CustomerUpsertWithoutReviewsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutReviewsInput, CustomerUpdateWithoutReviewsInput>, CustomerUncheckedUpdateWithoutReviewsInput>
  }

  export type ShopOwnerUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ShopOwnerCreateWithoutReviewsInput, ShopOwnerUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ShopOwnerCreateOrConnectWithoutReviewsInput
    upsert?: ShopOwnerUpsertWithoutReviewsInput
    connect?: ShopOwnerWhereUniqueInput
    update?: XOR<XOR<ShopOwnerUpdateToOneWithWhereWithoutReviewsInput, ShopOwnerUpdateWithoutReviewsInput>, ShopOwnerUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookingCreateWithoutCustomerInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    stylist?: StylistCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCustomerInput = {
    booking_id?: number
    booking_ref: string
    owner_id: number
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingCreateManyCustomerInputEnvelope = {
    data: BookingCreateManyCustomerInput | BookingCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCustomerInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    owner: ShopOwnerCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutCustomerInput = {
    review_id?: number
    booking_id: number
    owner_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewCreateManyCustomerInputEnvelope = {
    data: ReviewCreateManyCustomerInput | ReviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
    create: XOR<BookingCreateWithoutCustomerInput, BookingUncheckedCreateWithoutCustomerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutCustomerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutCustomerInput, BookingUncheckedUpdateWithoutCustomerInput>
  }

  export type BookingUpdateManyWithWhereWithoutCustomerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutCustomerInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    booking_id?: IntFilter<"Booking"> | number
    booking_ref?: StringFilter<"Booking"> | string
    customer_id?: IntNullableFilter<"Booking"> | number | null
    owner_id?: IntFilter<"Booking"> | number
    service_id?: IntFilter<"Booking"> | number
    stylist_id?: IntNullableFilter<"Booking"> | number | null
    appointment_date?: DateTimeFilter<"Booking"> | Date | string
    appointment_start?: DateTimeFilter<"Booking"> | Date | string
    appointment_end?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    is_home_visit?: BoolFilter<"Booking"> | boolean
    created_at?: DateTimeFilter<"Booking"> | Date | string
    updated_at?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    review_id?: IntFilter<"Review"> | number
    booking_id?: IntFilter<"Review"> | number
    customer_id?: IntFilter<"Review"> | number
    owner_id?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    created_at?: DateTimeFilter<"Review"> | Date | string
  }

  export type ServiceCreateWithoutOwnerInput = {
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutOwnerInput = {
    service_id?: number
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutOwnerInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOwnerInput, ServiceUncheckedCreateWithoutOwnerInput>
  }

  export type ServiceCreateManyOwnerInputEnvelope = {
    data: ServiceCreateManyOwnerInput | ServiceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type StylistCreateWithoutOwnerInput = {
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutStylistInput
  }

  export type StylistUncheckedCreateWithoutOwnerInput = {
    stylist_id?: number
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutStylistInput
  }

  export type StylistCreateOrConnectWithoutOwnerInput = {
    where: StylistWhereUniqueInput
    create: XOR<StylistCreateWithoutOwnerInput, StylistUncheckedCreateWithoutOwnerInput>
  }

  export type StylistCreateManyOwnerInputEnvelope = {
    data: StylistCreateManyOwnerInput | StylistCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SlotCreateWithoutOwnerInput = {
    weekday?: number | null
    start_time: Date | string
    end_time: Date | string
    capacity?: number
    created_at?: Date | string
  }

  export type SlotUncheckedCreateWithoutOwnerInput = {
    slot_id?: number
    weekday?: number | null
    start_time: Date | string
    end_time: Date | string
    capacity?: number
    created_at?: Date | string
  }

  export type SlotCreateOrConnectWithoutOwnerInput = {
    where: SlotWhereUniqueInput
    create: XOR<SlotCreateWithoutOwnerInput, SlotUncheckedCreateWithoutOwnerInput>
  }

  export type SlotCreateManyOwnerInputEnvelope = {
    data: SlotCreateManyOwnerInput | SlotCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutOwnerInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    stylist?: StylistCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutOwnerInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutOwnerInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput>
  }

  export type BookingCreateManyOwnerInputEnvelope = {
    data: BookingCreateManyOwnerInput | BookingCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutOwnerInput = {
    file_path: string
    mime_type?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type FileUncheckedCreateWithoutOwnerInput = {
    file_id?: number
    file_path: string
    mime_type?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type FileCreateOrConnectWithoutOwnerInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput>
  }

  export type FileCreateManyOwnerInputEnvelope = {
    data: FileCreateManyOwnerInput | FileCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutOwnerInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    customer: CustomerCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutOwnerInput = {
    review_id?: number
    booking_id: number
    customer_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutOwnerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutOwnerInput, ReviewUncheckedCreateWithoutOwnerInput>
  }

  export type ReviewCreateManyOwnerInputEnvelope = {
    data: ReviewCreateManyOwnerInput | ReviewCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutOwnerInput, ServiceUncheckedUpdateWithoutOwnerInput>
    create: XOR<ServiceCreateWithoutOwnerInput, ServiceUncheckedCreateWithoutOwnerInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutOwnerInput, ServiceUncheckedUpdateWithoutOwnerInput>
  }

  export type ServiceUpdateManyWithWhereWithoutOwnerInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    service_id?: IntFilter<"Service"> | number
    owner_id?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    duration_minutes?: IntFilter<"Service"> | number
    base_price?: IntFilter<"Service"> | number
    gender_type?: StringNullableFilter<"Service"> | string | null
    is_home_visit?: BoolFilter<"Service"> | boolean
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
  }

  export type StylistUpsertWithWhereUniqueWithoutOwnerInput = {
    where: StylistWhereUniqueInput
    update: XOR<StylistUpdateWithoutOwnerInput, StylistUncheckedUpdateWithoutOwnerInput>
    create: XOR<StylistCreateWithoutOwnerInput, StylistUncheckedCreateWithoutOwnerInput>
  }

  export type StylistUpdateWithWhereUniqueWithoutOwnerInput = {
    where: StylistWhereUniqueInput
    data: XOR<StylistUpdateWithoutOwnerInput, StylistUncheckedUpdateWithoutOwnerInput>
  }

  export type StylistUpdateManyWithWhereWithoutOwnerInput = {
    where: StylistScalarWhereInput
    data: XOR<StylistUpdateManyMutationInput, StylistUncheckedUpdateManyWithoutOwnerInput>
  }

  export type StylistScalarWhereInput = {
    AND?: StylistScalarWhereInput | StylistScalarWhereInput[]
    OR?: StylistScalarWhereInput[]
    NOT?: StylistScalarWhereInput | StylistScalarWhereInput[]
    stylist_id?: IntFilter<"Stylist"> | number
    owner_id?: IntFilter<"Stylist"> | number
    name?: StringFilter<"Stylist"> | string
    specialties?: StringNullableListFilter<"Stylist">
    phone?: StringNullableFilter<"Stylist"> | string | null
    created_at?: DateTimeFilter<"Stylist"> | Date | string
  }

  export type SlotUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SlotWhereUniqueInput
    update: XOR<SlotUpdateWithoutOwnerInput, SlotUncheckedUpdateWithoutOwnerInput>
    create: XOR<SlotCreateWithoutOwnerInput, SlotUncheckedCreateWithoutOwnerInput>
  }

  export type SlotUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SlotWhereUniqueInput
    data: XOR<SlotUpdateWithoutOwnerInput, SlotUncheckedUpdateWithoutOwnerInput>
  }

  export type SlotUpdateManyWithWhereWithoutOwnerInput = {
    where: SlotScalarWhereInput
    data: XOR<SlotUpdateManyMutationInput, SlotUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SlotScalarWhereInput = {
    AND?: SlotScalarWhereInput | SlotScalarWhereInput[]
    OR?: SlotScalarWhereInput[]
    NOT?: SlotScalarWhereInput | SlotScalarWhereInput[]
    slot_id?: IntFilter<"Slot"> | number
    owner_id?: IntFilter<"Slot"> | number
    weekday?: IntNullableFilter<"Slot"> | number | null
    start_time?: DateTimeFilter<"Slot"> | Date | string
    end_time?: DateTimeFilter<"Slot"> | Date | string
    capacity?: IntFilter<"Slot"> | number
    created_at?: DateTimeFilter<"Slot"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutOwnerInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutOwnerInput, BookingUncheckedUpdateWithoutOwnerInput>
    create: XOR<BookingCreateWithoutOwnerInput, BookingUncheckedCreateWithoutOwnerInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutOwnerInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutOwnerInput, BookingUncheckedUpdateWithoutOwnerInput>
  }

  export type BookingUpdateManyWithWhereWithoutOwnerInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FileUpsertWithWhereUniqueWithoutOwnerInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutOwnerInput, FileUncheckedUpdateWithoutOwnerInput>
    create: XOR<FileCreateWithoutOwnerInput, FileUncheckedCreateWithoutOwnerInput>
  }

  export type FileUpdateWithWhereUniqueWithoutOwnerInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutOwnerInput, FileUncheckedUpdateWithoutOwnerInput>
  }

  export type FileUpdateManyWithWhereWithoutOwnerInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutOwnerInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    file_id?: IntFilter<"File"> | number
    owner_id?: IntFilter<"File"> | number
    file_path?: StringFilter<"File"> | string
    mime_type?: StringNullableFilter<"File"> | string | null
    meta?: JsonNullableFilter<"File">
    created_at?: DateTimeFilter<"File"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutOwnerInput, ReviewUncheckedUpdateWithoutOwnerInput>
    create: XOR<ReviewCreateWithoutOwnerInput, ReviewUncheckedCreateWithoutOwnerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutOwnerInput, ReviewUncheckedUpdateWithoutOwnerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutOwnerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ShopOwnerCreateWithoutStylistsInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceCreateNestedManyWithoutOwnerInput
    slots?: SlotCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutOwnerInput
    files?: FileCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateWithoutStylistsInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOwnerInput
    slots?: SlotUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerCreateOrConnectWithoutStylistsInput = {
    where: ShopOwnerWhereUniqueInput
    create: XOR<ShopOwnerCreateWithoutStylistsInput, ShopOwnerUncheckedCreateWithoutStylistsInput>
  }

  export type BookingCreateWithoutStylistInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    owner: ShopOwnerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutStylistInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    service_id: number
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutStylistInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutStylistInput, BookingUncheckedCreateWithoutStylistInput>
  }

  export type BookingCreateManyStylistInputEnvelope = {
    data: BookingCreateManyStylistInput | BookingCreateManyStylistInput[]
    skipDuplicates?: boolean
  }

  export type ShopOwnerUpsertWithoutStylistsInput = {
    update: XOR<ShopOwnerUpdateWithoutStylistsInput, ShopOwnerUncheckedUpdateWithoutStylistsInput>
    create: XOR<ShopOwnerCreateWithoutStylistsInput, ShopOwnerUncheckedCreateWithoutStylistsInput>
    where?: ShopOwnerWhereInput
  }

  export type ShopOwnerUpdateToOneWithWhereWithoutStylistsInput = {
    where?: ShopOwnerWhereInput
    data: XOR<ShopOwnerUpdateWithoutStylistsInput, ShopOwnerUncheckedUpdateWithoutStylistsInput>
  }

  export type ShopOwnerUpdateWithoutStylistsInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutOwnerNestedInput
    slots?: SlotUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutOwnerNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateWithoutStylistsInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOwnerNestedInput
    slots?: SlotUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutStylistInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutStylistInput, BookingUncheckedUpdateWithoutStylistInput>
    create: XOR<BookingCreateWithoutStylistInput, BookingUncheckedCreateWithoutStylistInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutStylistInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutStylistInput, BookingUncheckedUpdateWithoutStylistInput>
  }

  export type BookingUpdateManyWithWhereWithoutStylistInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutStylistInput>
  }

  export type ShopOwnerCreateWithoutServicesInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    stylists?: StylistCreateNestedManyWithoutOwnerInput
    slots?: SlotCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutOwnerInput
    files?: FileCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateWithoutServicesInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    stylists?: StylistUncheckedCreateNestedManyWithoutOwnerInput
    slots?: SlotUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerCreateOrConnectWithoutServicesInput = {
    where: ShopOwnerWhereUniqueInput
    create: XOR<ShopOwnerCreateWithoutServicesInput, ShopOwnerUncheckedCreateWithoutServicesInput>
  }

  export type BookingCreateWithoutServiceInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    owner: ShopOwnerCreateNestedOneWithoutBookingsInput
    stylist?: StylistCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutServiceInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type ShopOwnerUpsertWithoutServicesInput = {
    update: XOR<ShopOwnerUpdateWithoutServicesInput, ShopOwnerUncheckedUpdateWithoutServicesInput>
    create: XOR<ShopOwnerCreateWithoutServicesInput, ShopOwnerUncheckedCreateWithoutServicesInput>
    where?: ShopOwnerWhereInput
  }

  export type ShopOwnerUpdateToOneWithWhereWithoutServicesInput = {
    where?: ShopOwnerWhereInput
    data: XOR<ShopOwnerUpdateWithoutServicesInput, ShopOwnerUncheckedUpdateWithoutServicesInput>
  }

  export type ShopOwnerUpdateWithoutServicesInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stylists?: StylistUpdateManyWithoutOwnerNestedInput
    slots?: SlotUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutOwnerNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateWithoutServicesInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    stylists?: StylistUncheckedUpdateManyWithoutOwnerNestedInput
    slots?: SlotUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
    create: XOR<BookingCreateWithoutServiceInput, BookingUncheckedCreateWithoutServiceInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServiceInput, BookingUncheckedUpdateWithoutServiceInput>
  }

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServiceInput>
  }

  export type ShopOwnerCreateWithoutSlotsInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceCreateNestedManyWithoutOwnerInput
    stylists?: StylistCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutOwnerInput
    files?: FileCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateWithoutSlotsInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOwnerInput
    stylists?: StylistUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerCreateOrConnectWithoutSlotsInput = {
    where: ShopOwnerWhereUniqueInput
    create: XOR<ShopOwnerCreateWithoutSlotsInput, ShopOwnerUncheckedCreateWithoutSlotsInput>
  }

  export type ShopOwnerUpsertWithoutSlotsInput = {
    update: XOR<ShopOwnerUpdateWithoutSlotsInput, ShopOwnerUncheckedUpdateWithoutSlotsInput>
    create: XOR<ShopOwnerCreateWithoutSlotsInput, ShopOwnerUncheckedCreateWithoutSlotsInput>
    where?: ShopOwnerWhereInput
  }

  export type ShopOwnerUpdateToOneWithWhereWithoutSlotsInput = {
    where?: ShopOwnerWhereInput
    data: XOR<ShopOwnerUpdateWithoutSlotsInput, ShopOwnerUncheckedUpdateWithoutSlotsInput>
  }

  export type ShopOwnerUpdateWithoutSlotsInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutOwnerNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateWithoutSlotsInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type CustomerCreateWithoutBookingsInput = {
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutBookingsInput = {
    customer_id?: number
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutBookingsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
  }

  export type ShopOwnerCreateWithoutBookingsInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceCreateNestedManyWithoutOwnerInput
    stylists?: StylistCreateNestedManyWithoutOwnerInput
    slots?: SlotCreateNestedManyWithoutOwnerInput
    files?: FileCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateWithoutBookingsInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOwnerInput
    stylists?: StylistUncheckedCreateNestedManyWithoutOwnerInput
    slots?: SlotUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerCreateOrConnectWithoutBookingsInput = {
    where: ShopOwnerWhereUniqueInput
    create: XOR<ShopOwnerCreateWithoutBookingsInput, ShopOwnerUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    service_id?: number
    owner_id: number
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type StylistCreateWithoutBookingsInput = {
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
    owner: ShopOwnerCreateNestedOneWithoutStylistsInput
  }

  export type StylistUncheckedCreateWithoutBookingsInput = {
    stylist_id?: number
    owner_id: number
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
  }

  export type StylistCreateOrConnectWithoutBookingsInput = {
    where: StylistWhereUniqueInput
    create: XOR<StylistCreateWithoutBookingsInput, StylistUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentCreateWithoutBookingInput = {
    amount: number
    currency?: string
    method?: string | null
    status?: string
    reference?: string | null
    created_at?: Date | string
  }

  export type PaymentUncheckedCreateWithoutBookingInput = {
    payment_id?: number
    amount: number
    currency?: string
    method?: string | null
    status?: string
    reference?: string | null
    created_at?: Date | string
  }

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    customer: CustomerCreateNestedOneWithoutReviewsInput
    owner: ShopOwnerCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    review_id?: number
    customer_id: number
    owner_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type CustomerUpsertWithoutBookingsInput = {
    update: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
    create: XOR<CustomerCreateWithoutBookingsInput, CustomerUncheckedCreateWithoutBookingsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutBookingsInput, CustomerUncheckedUpdateWithoutBookingsInput>
  }

  export type CustomerUpdateWithoutBookingsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutBookingsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ShopOwnerUpsertWithoutBookingsInput = {
    update: XOR<ShopOwnerUpdateWithoutBookingsInput, ShopOwnerUncheckedUpdateWithoutBookingsInput>
    create: XOR<ShopOwnerCreateWithoutBookingsInput, ShopOwnerUncheckedCreateWithoutBookingsInput>
    where?: ShopOwnerWhereInput
  }

  export type ShopOwnerUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ShopOwnerWhereInput
    data: XOR<ShopOwnerUpdateWithoutBookingsInput, ShopOwnerUncheckedUpdateWithoutBookingsInput>
  }

  export type ShopOwnerUpdateWithoutBookingsInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUpdateManyWithoutOwnerNestedInput
    slots?: SlotUpdateManyWithoutOwnerNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateWithoutBookingsInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUncheckedUpdateManyWithoutOwnerNestedInput
    slots?: SlotUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ServiceUpsertWithoutBookingsInput = {
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistUpsertWithoutBookingsInput = {
    update: XOR<StylistUpdateWithoutBookingsInput, StylistUncheckedUpdateWithoutBookingsInput>
    create: XOR<StylistCreateWithoutBookingsInput, StylistUncheckedCreateWithoutBookingsInput>
    where?: StylistWhereInput
  }

  export type StylistUpdateToOneWithWhereWithoutBookingsInput = {
    where?: StylistWhereInput
    data: XOR<StylistUpdateWithoutBookingsInput, StylistUncheckedUpdateWithoutBookingsInput>
  }

  export type StylistUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutStylistsNestedInput
  }

  export type StylistUncheckedUpdateWithoutBookingsInput = {
    stylist_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithoutBookingInput = {
    update: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentCreateWithoutBookingInput, PaymentUncheckedCreateWithoutBookingInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutBookingInput, PaymentUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentUpdateWithoutBookingInput = {
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    payment_id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    method?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpsertWithoutBookingInput = {
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateWithoutBookingInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutReviewsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutPaymentInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    owner: ShopOwnerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    stylist?: StylistCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
  }

  export type BookingUpsertWithoutPaymentInput = {
    update: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
    create: XOR<BookingCreateWithoutPaymentInput, BookingUncheckedCreateWithoutPaymentInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentInput, BookingUncheckedUpdateWithoutPaymentInput>
  }

  export type BookingUpdateWithoutPaymentInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    stylist?: StylistUpdateOneWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type ShopOwnerCreateWithoutFilesInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceCreateNestedManyWithoutOwnerInput
    stylists?: StylistCreateNestedManyWithoutOwnerInput
    slots?: SlotCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutOwnerInput
    reviews?: ReviewCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateWithoutFilesInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOwnerInput
    stylists?: StylistUncheckedCreateNestedManyWithoutOwnerInput
    slots?: SlotUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerCreateOrConnectWithoutFilesInput = {
    where: ShopOwnerWhereUniqueInput
    create: XOR<ShopOwnerCreateWithoutFilesInput, ShopOwnerUncheckedCreateWithoutFilesInput>
  }

  export type ShopOwnerUpsertWithoutFilesInput = {
    update: XOR<ShopOwnerUpdateWithoutFilesInput, ShopOwnerUncheckedUpdateWithoutFilesInput>
    create: XOR<ShopOwnerCreateWithoutFilesInput, ShopOwnerUncheckedCreateWithoutFilesInput>
    where?: ShopOwnerWhereInput
  }

  export type ShopOwnerUpdateToOneWithWhereWithoutFilesInput = {
    where?: ShopOwnerWhereInput
    data: XOR<ShopOwnerUpdateWithoutFilesInput, ShopOwnerUncheckedUpdateWithoutFilesInput>
  }

  export type ShopOwnerUpdateWithoutFilesInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUpdateManyWithoutOwnerNestedInput
    slots?: SlotUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateWithoutFilesInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUncheckedUpdateManyWithoutOwnerNestedInput
    slots?: SlotUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BookingCreateWithoutReviewInput = {
    booking_ref: string
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    customer?: CustomerCreateNestedOneWithoutBookingsInput
    owner: ShopOwnerCreateNestedOneWithoutBookingsInput
    service: ServiceCreateNestedOneWithoutBookingsInput
    stylist?: StylistCreateNestedOneWithoutBookingsInput
    payment?: PaymentCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type CustomerCreateWithoutReviewsInput = {
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutReviewsInput = {
    customer_id?: number
    first_name: string
    last_name?: string | null
    email: string
    phone: string
    password_hash: string
    gender?: string | null
    dob?: Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutReviewsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
  }

  export type ShopOwnerCreateWithoutReviewsInput = {
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceCreateNestedManyWithoutOwnerInput
    stylists?: StylistCreateNestedManyWithoutOwnerInput
    slots?: SlotCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutOwnerInput
    files?: FileCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerUncheckedCreateWithoutReviewsInput = {
    owner_id?: number
    user_email: string
    phone: string
    password_hash: string
    full_name?: string | null
    shop_name?: string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: boolean
    service_types?: ShopOwnerCreateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutOwnerInput
    stylists?: StylistUncheckedCreateNestedManyWithoutOwnerInput
    slots?: SlotUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutOwnerInput
    files?: FileUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ShopOwnerCreateOrConnectWithoutReviewsInput = {
    where: ShopOwnerWhereUniqueInput
    create: XOR<ShopOwnerCreateWithoutReviewsInput, ShopOwnerUncheckedCreateWithoutReviewsInput>
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    stylist?: StylistUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type CustomerUpsertWithoutReviewsInput = {
    update: XOR<CustomerUpdateWithoutReviewsInput, CustomerUncheckedUpdateWithoutReviewsInput>
    create: XOR<CustomerCreateWithoutReviewsInput, CustomerUncheckedCreateWithoutReviewsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutReviewsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutReviewsInput, CustomerUncheckedUpdateWithoutReviewsInput>
  }

  export type CustomerUpdateWithoutReviewsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutReviewsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    default_address?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type ShopOwnerUpsertWithoutReviewsInput = {
    update: XOR<ShopOwnerUpdateWithoutReviewsInput, ShopOwnerUncheckedUpdateWithoutReviewsInput>
    create: XOR<ShopOwnerCreateWithoutReviewsInput, ShopOwnerUncheckedCreateWithoutReviewsInput>
    where?: ShopOwnerWhereInput
  }

  export type ShopOwnerUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ShopOwnerWhereInput
    data: XOR<ShopOwnerUpdateWithoutReviewsInput, ShopOwnerUncheckedUpdateWithoutReviewsInput>
  }

  export type ShopOwnerUpdateWithoutReviewsInput = {
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUpdateManyWithoutOwnerNestedInput
    slots?: SlotUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutOwnerNestedInput
    files?: FileUpdateManyWithoutOwnerNestedInput
  }

  export type ShopOwnerUncheckedUpdateWithoutReviewsInput = {
    owner_id?: IntFieldUpdateOperationsInput | number
    user_email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_name?: NullableStringFieldUpdateOperationsInput | string | null
    shop_address?: NullableJsonNullValueInput | InputJsonValue
    is_freelancer?: BoolFieldUpdateOperationsInput | boolean
    service_types?: ShopOwnerUpdateservice_typesInput | string[]
    bank_account?: NullableJsonNullValueInput | InputJsonValue
    upi_details?: NullableJsonNullValueInput | InputJsonValue
    holidays?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutOwnerNestedInput
    stylists?: StylistUncheckedUpdateManyWithoutOwnerNestedInput
    slots?: SlotUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutOwnerNestedInput
    files?: FileUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BookingCreateManyCustomerInput = {
    booking_id?: number
    booking_ref: string
    owner_id: number
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReviewCreateManyCustomerInput = {
    review_id?: number
    booking_id: number
    owner_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type BookingUpdateWithoutCustomerInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    stylist?: StylistUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCustomerInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutCustomerInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCustomerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCustomerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    owner_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyOwnerInput = {
    service_id?: number
    name: string
    description?: string | null
    duration_minutes: number
    base_price: number
    gender_type?: string | null
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StylistCreateManyOwnerInput = {
    stylist_id?: number
    name: string
    specialties?: StylistCreatespecialtiesInput | string[]
    phone?: string | null
    created_at?: Date | string
  }

  export type SlotCreateManyOwnerInput = {
    slot_id?: number
    weekday?: number | null
    start_time: Date | string
    end_time: Date | string
    capacity?: number
    created_at?: Date | string
  }

  export type BookingCreateManyOwnerInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    service_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateManyOwnerInput = {
    file_id?: number
    file_path: string
    mime_type?: string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type ReviewCreateManyOwnerInput = {
    review_id?: number
    booking_id: number
    customer_id: number
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ServiceUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOwnerInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutOwnerInput = {
    service_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration_minutes?: IntFieldUpdateOperationsInput | number
    base_price?: IntFieldUpdateOperationsInput | number
    gender_type?: NullableStringFieldUpdateOperationsInput | string | null
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StylistUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutStylistNestedInput
  }

  export type StylistUncheckedUpdateWithoutOwnerInput = {
    stylist_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutStylistNestedInput
  }

  export type StylistUncheckedUpdateManyWithoutOwnerInput = {
    stylist_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    specialties?: StylistUpdatespecialtiesInput | string[]
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotUpdateWithoutOwnerInput = {
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotUncheckedUpdateWithoutOwnerInput = {
    slot_id?: IntFieldUpdateOperationsInput | number
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotUncheckedUpdateManyWithoutOwnerInput = {
    slot_id?: IntFieldUpdateOperationsInput | number
    weekday?: NullableIntFieldUpdateOperationsInput | number | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    capacity?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutOwnerInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    stylist?: StylistUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutOwnerInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutOwnerInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    service_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutOwnerInput = {
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutOwnerInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutOwnerInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    file_path?: StringFieldUpdateOperationsInput | string
    mime_type?: NullableStringFieldUpdateOperationsInput | string | null
    meta?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutOwnerInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    customer?: CustomerUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutOwnerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutOwnerInput = {
    review_id?: IntFieldUpdateOperationsInput | number
    booking_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyStylistInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    service_id: number
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingUpdateWithoutStylistInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput
    service?: ServiceUpdateOneRequiredWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutStylistInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutStylistInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateManyServiceInput = {
    booking_id?: number
    booking_ref: string
    customer_id?: number | null
    owner_id: number
    stylist_id?: number | null
    appointment_date: Date | string
    appointment_start: Date | string
    appointment_end: Date | string
    status?: string
    is_home_visit?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BookingUpdateWithoutServiceInput = {
    booking_ref?: StringFieldUpdateOperationsInput | string
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneWithoutBookingsNestedInput
    owner?: ShopOwnerUpdateOneRequiredWithoutBookingsNestedInput
    stylist?: StylistUpdateOneWithoutBookingsNestedInput
    payment?: PaymentUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutServiceInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    booking_id?: IntFieldUpdateOperationsInput | number
    booking_ref?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    owner_id?: IntFieldUpdateOperationsInput | number
    stylist_id?: NullableIntFieldUpdateOperationsInput | number | null
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_start?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment_end?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    is_home_visit?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopOwnerCountOutputTypeDefaultArgs instead
     */
    export type ShopOwnerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopOwnerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StylistCountOutputTypeDefaultArgs instead
     */
    export type StylistCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StylistCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShopOwnerDefaultArgs instead
     */
    export type ShopOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShopOwnerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StylistDefaultArgs instead
     */
    export type StylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StylistDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlotDefaultArgs instead
     */
    export type SlotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDefaultArgs instead
     */
    export type PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}