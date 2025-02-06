
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
 * Model MediaLibraries
 * 
 */
export type MediaLibraries = $Result.DefaultSelection<Prisma.$MediaLibrariesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MediaLibraries
 * const mediaLibraries = await prisma.mediaLibraries.findMany()
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
   * // Fetch zero or more MediaLibraries
   * const mediaLibraries = await prisma.mediaLibraries.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.mediaLibraries`: Exposes CRUD operations for the **MediaLibraries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaLibraries
    * const mediaLibraries = await prisma.mediaLibraries.findMany()
    * ```
    */
  get mediaLibraries(): Prisma.MediaLibrariesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
    MediaLibraries: 'MediaLibraries'
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
      modelProps: "mediaLibraries"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MediaLibraries: {
        payload: Prisma.$MediaLibrariesPayload<ExtArgs>
        fields: Prisma.MediaLibrariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaLibrariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaLibrariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>
          }
          findFirst: {
            args: Prisma.MediaLibrariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaLibrariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>
          }
          findMany: {
            args: Prisma.MediaLibrariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>[]
          }
          create: {
            args: Prisma.MediaLibrariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>
          }
          createMany: {
            args: Prisma.MediaLibrariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaLibrariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>[]
          }
          delete: {
            args: Prisma.MediaLibrariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>
          }
          update: {
            args: Prisma.MediaLibrariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>
          }
          deleteMany: {
            args: Prisma.MediaLibrariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaLibrariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MediaLibrariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>[]
          }
          upsert: {
            args: Prisma.MediaLibrariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaLibrariesPayload>
          }
          aggregate: {
            args: Prisma.MediaLibrariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaLibraries>
          }
          groupBy: {
            args: Prisma.MediaLibrariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaLibrariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaLibrariesCountArgs<ExtArgs>
            result: $Utils.Optional<MediaLibrariesCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    mediaLibraries?: MediaLibrariesOmit
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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model MediaLibraries
   */

  export type AggregateMediaLibraries = {
    _count: MediaLibrariesCountAggregateOutputType | null
    _avg: MediaLibrariesAvgAggregateOutputType | null
    _sum: MediaLibrariesSumAggregateOutputType | null
    _min: MediaLibrariesMinAggregateOutputType | null
    _max: MediaLibrariesMaxAggregateOutputType | null
  }

  export type MediaLibrariesAvgAggregateOutputType = {
    id: number | null
  }

  export type MediaLibrariesSumAggregateOutputType = {
    id: number | null
  }

  export type MediaLibrariesMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    thumbnail: string | null
    status: string | null
    publishDate: Date | null
    createdAt: Date | null
    updated: Date | null
  }

  export type MediaLibrariesMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    thumbnail: string | null
    status: string | null
    publishDate: Date | null
    createdAt: Date | null
    updated: Date | null
  }

  export type MediaLibrariesCountAggregateOutputType = {
    id: number
    title: number
    description: number
    tags: number
    cutomProps: number
    thumbnail: number
    status: number
    publishDate: number
    createdAt: number
    updated: number
    _all: number
  }


  export type MediaLibrariesAvgAggregateInputType = {
    id?: true
  }

  export type MediaLibrariesSumAggregateInputType = {
    id?: true
  }

  export type MediaLibrariesMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    status?: true
    publishDate?: true
    createdAt?: true
    updated?: true
  }

  export type MediaLibrariesMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    thumbnail?: true
    status?: true
    publishDate?: true
    createdAt?: true
    updated?: true
  }

  export type MediaLibrariesCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    tags?: true
    cutomProps?: true
    thumbnail?: true
    status?: true
    publishDate?: true
    createdAt?: true
    updated?: true
    _all?: true
  }

  export type MediaLibrariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaLibraries to aggregate.
     */
    where?: MediaLibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaLibraries to fetch.
     */
    orderBy?: MediaLibrariesOrderByWithRelationInput | MediaLibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaLibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaLibraries
    **/
    _count?: true | MediaLibrariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaLibrariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaLibrariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaLibrariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaLibrariesMaxAggregateInputType
  }

  export type GetMediaLibrariesAggregateType<T extends MediaLibrariesAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaLibraries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaLibraries[P]>
      : GetScalarType<T[P], AggregateMediaLibraries[P]>
  }




  export type MediaLibrariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaLibrariesWhereInput
    orderBy?: MediaLibrariesOrderByWithAggregationInput | MediaLibrariesOrderByWithAggregationInput[]
    by: MediaLibrariesScalarFieldEnum[] | MediaLibrariesScalarFieldEnum
    having?: MediaLibrariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaLibrariesCountAggregateInputType | true
    _avg?: MediaLibrariesAvgAggregateInputType
    _sum?: MediaLibrariesSumAggregateInputType
    _min?: MediaLibrariesMinAggregateInputType
    _max?: MediaLibrariesMaxAggregateInputType
  }

  export type MediaLibrariesGroupByOutputType = {
    id: number
    title: string
    description: string | null
    tags: JsonValue
    cutomProps: JsonValue
    thumbnail: string
    status: string
    publishDate: Date
    createdAt: Date
    updated: Date
    _count: MediaLibrariesCountAggregateOutputType | null
    _avg: MediaLibrariesAvgAggregateOutputType | null
    _sum: MediaLibrariesSumAggregateOutputType | null
    _min: MediaLibrariesMinAggregateOutputType | null
    _max: MediaLibrariesMaxAggregateOutputType | null
  }

  type GetMediaLibrariesGroupByPayload<T extends MediaLibrariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaLibrariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaLibrariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaLibrariesGroupByOutputType[P]>
            : GetScalarType<T[P], MediaLibrariesGroupByOutputType[P]>
        }
      >
    >


  export type MediaLibrariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    cutomProps?: boolean
    thumbnail?: boolean
    status?: boolean
    publishDate?: boolean
    createdAt?: boolean
    updated?: boolean
  }, ExtArgs["result"]["mediaLibraries"]>

  export type MediaLibrariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    cutomProps?: boolean
    thumbnail?: boolean
    status?: boolean
    publishDate?: boolean
    createdAt?: boolean
    updated?: boolean
  }, ExtArgs["result"]["mediaLibraries"]>

  export type MediaLibrariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    cutomProps?: boolean
    thumbnail?: boolean
    status?: boolean
    publishDate?: boolean
    createdAt?: boolean
    updated?: boolean
  }, ExtArgs["result"]["mediaLibraries"]>

  export type MediaLibrariesSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    tags?: boolean
    cutomProps?: boolean
    thumbnail?: boolean
    status?: boolean
    publishDate?: boolean
    createdAt?: boolean
    updated?: boolean
  }

  export type MediaLibrariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "tags" | "cutomProps" | "thumbnail" | "status" | "publishDate" | "createdAt" | "updated", ExtArgs["result"]["mediaLibraries"]>

  export type $MediaLibrariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaLibraries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      tags: Prisma.JsonValue
      cutomProps: Prisma.JsonValue
      thumbnail: string
      status: string
      publishDate: Date
      createdAt: Date
      updated: Date
    }, ExtArgs["result"]["mediaLibraries"]>
    composites: {}
  }

  type MediaLibrariesGetPayload<S extends boolean | null | undefined | MediaLibrariesDefaultArgs> = $Result.GetResult<Prisma.$MediaLibrariesPayload, S>

  type MediaLibrariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaLibrariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaLibrariesCountAggregateInputType | true
    }

  export interface MediaLibrariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaLibraries'], meta: { name: 'MediaLibraries' } }
    /**
     * Find zero or one MediaLibraries that matches the filter.
     * @param {MediaLibrariesFindUniqueArgs} args - Arguments to find a MediaLibraries
     * @example
     * // Get one MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaLibrariesFindUniqueArgs>(args: SelectSubset<T, MediaLibrariesFindUniqueArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MediaLibraries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaLibrariesFindUniqueOrThrowArgs} args - Arguments to find a MediaLibraries
     * @example
     * // Get one MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaLibrariesFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaLibrariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MediaLibraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesFindFirstArgs} args - Arguments to find a MediaLibraries
     * @example
     * // Get one MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaLibrariesFindFirstArgs>(args?: SelectSubset<T, MediaLibrariesFindFirstArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MediaLibraries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesFindFirstOrThrowArgs} args - Arguments to find a MediaLibraries
     * @example
     * // Get one MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaLibrariesFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaLibrariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MediaLibraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.findMany()
     * 
     * // Get first 10 MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaLibrariesWithIdOnly = await prisma.mediaLibraries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaLibrariesFindManyArgs>(args?: SelectSubset<T, MediaLibrariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MediaLibraries.
     * @param {MediaLibrariesCreateArgs} args - Arguments to create a MediaLibraries.
     * @example
     * // Create one MediaLibraries
     * const MediaLibraries = await prisma.mediaLibraries.create({
     *   data: {
     *     // ... data to create a MediaLibraries
     *   }
     * })
     * 
     */
    create<T extends MediaLibrariesCreateArgs>(args: SelectSubset<T, MediaLibrariesCreateArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MediaLibraries.
     * @param {MediaLibrariesCreateManyArgs} args - Arguments to create many MediaLibraries.
     * @example
     * // Create many MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaLibrariesCreateManyArgs>(args?: SelectSubset<T, MediaLibrariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaLibraries and returns the data saved in the database.
     * @param {MediaLibrariesCreateManyAndReturnArgs} args - Arguments to create many MediaLibraries.
     * @example
     * // Create many MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaLibraries and only return the `id`
     * const mediaLibrariesWithIdOnly = await prisma.mediaLibraries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaLibrariesCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaLibrariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a MediaLibraries.
     * @param {MediaLibrariesDeleteArgs} args - Arguments to delete one MediaLibraries.
     * @example
     * // Delete one MediaLibraries
     * const MediaLibraries = await prisma.mediaLibraries.delete({
     *   where: {
     *     // ... filter to delete one MediaLibraries
     *   }
     * })
     * 
     */
    delete<T extends MediaLibrariesDeleteArgs>(args: SelectSubset<T, MediaLibrariesDeleteArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MediaLibraries.
     * @param {MediaLibrariesUpdateArgs} args - Arguments to update one MediaLibraries.
     * @example
     * // Update one MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaLibrariesUpdateArgs>(args: SelectSubset<T, MediaLibrariesUpdateArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MediaLibraries.
     * @param {MediaLibrariesDeleteManyArgs} args - Arguments to filter MediaLibraries to delete.
     * @example
     * // Delete a few MediaLibraries
     * const { count } = await prisma.mediaLibraries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaLibrariesDeleteManyArgs>(args?: SelectSubset<T, MediaLibrariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaLibrariesUpdateManyArgs>(args: SelectSubset<T, MediaLibrariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaLibraries and returns the data updated in the database.
     * @param {MediaLibrariesUpdateManyAndReturnArgs} args - Arguments to update many MediaLibraries.
     * @example
     * // Update many MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MediaLibraries and only return the `id`
     * const mediaLibrariesWithIdOnly = await prisma.mediaLibraries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MediaLibrariesUpdateManyAndReturnArgs>(args: SelectSubset<T, MediaLibrariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one MediaLibraries.
     * @param {MediaLibrariesUpsertArgs} args - Arguments to update or create a MediaLibraries.
     * @example
     * // Update or create a MediaLibraries
     * const mediaLibraries = await prisma.mediaLibraries.upsert({
     *   create: {
     *     // ... data to create a MediaLibraries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaLibraries we want to update
     *   }
     * })
     */
    upsert<T extends MediaLibrariesUpsertArgs>(args: SelectSubset<T, MediaLibrariesUpsertArgs<ExtArgs>>): Prisma__MediaLibrariesClient<$Result.GetResult<Prisma.$MediaLibrariesPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MediaLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesCountArgs} args - Arguments to filter MediaLibraries to count.
     * @example
     * // Count the number of MediaLibraries
     * const count = await prisma.mediaLibraries.count({
     *   where: {
     *     // ... the filter for the MediaLibraries we want to count
     *   }
     * })
    **/
    count<T extends MediaLibrariesCountArgs>(
      args?: Subset<T, MediaLibrariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaLibrariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaLibrariesAggregateArgs>(args: Subset<T, MediaLibrariesAggregateArgs>): Prisma.PrismaPromise<GetMediaLibrariesAggregateType<T>>

    /**
     * Group by MediaLibraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaLibrariesGroupByArgs} args - Group by arguments.
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
      T extends MediaLibrariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaLibrariesGroupByArgs['orderBy'] }
        : { orderBy?: MediaLibrariesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaLibrariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaLibrariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaLibraries model
   */
  readonly fields: MediaLibrariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaLibraries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaLibrariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the MediaLibraries model
   */ 
  interface MediaLibrariesFieldRefs {
    readonly id: FieldRef<"MediaLibraries", 'Int'>
    readonly title: FieldRef<"MediaLibraries", 'String'>
    readonly description: FieldRef<"MediaLibraries", 'String'>
    readonly tags: FieldRef<"MediaLibraries", 'Json'>
    readonly cutomProps: FieldRef<"MediaLibraries", 'Json'>
    readonly thumbnail: FieldRef<"MediaLibraries", 'String'>
    readonly status: FieldRef<"MediaLibraries", 'String'>
    readonly publishDate: FieldRef<"MediaLibraries", 'DateTime'>
    readonly createdAt: FieldRef<"MediaLibraries", 'DateTime'>
    readonly updated: FieldRef<"MediaLibraries", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaLibraries findUnique
   */
  export type MediaLibrariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * Filter, which MediaLibraries to fetch.
     */
    where: MediaLibrariesWhereUniqueInput
  }

  /**
   * MediaLibraries findUniqueOrThrow
   */
  export type MediaLibrariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * Filter, which MediaLibraries to fetch.
     */
    where: MediaLibrariesWhereUniqueInput
  }

  /**
   * MediaLibraries findFirst
   */
  export type MediaLibrariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * Filter, which MediaLibraries to fetch.
     */
    where?: MediaLibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaLibraries to fetch.
     */
    orderBy?: MediaLibrariesOrderByWithRelationInput | MediaLibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaLibraries.
     */
    cursor?: MediaLibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaLibraries.
     */
    distinct?: MediaLibrariesScalarFieldEnum | MediaLibrariesScalarFieldEnum[]
  }

  /**
   * MediaLibraries findFirstOrThrow
   */
  export type MediaLibrariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * Filter, which MediaLibraries to fetch.
     */
    where?: MediaLibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaLibraries to fetch.
     */
    orderBy?: MediaLibrariesOrderByWithRelationInput | MediaLibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaLibraries.
     */
    cursor?: MediaLibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaLibraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaLibraries.
     */
    distinct?: MediaLibrariesScalarFieldEnum | MediaLibrariesScalarFieldEnum[]
  }

  /**
   * MediaLibraries findMany
   */
  export type MediaLibrariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * Filter, which MediaLibraries to fetch.
     */
    where?: MediaLibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaLibraries to fetch.
     */
    orderBy?: MediaLibrariesOrderByWithRelationInput | MediaLibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaLibraries.
     */
    cursor?: MediaLibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaLibraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaLibraries.
     */
    skip?: number
    distinct?: MediaLibrariesScalarFieldEnum | MediaLibrariesScalarFieldEnum[]
  }

  /**
   * MediaLibraries create
   */
  export type MediaLibrariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * The data needed to create a MediaLibraries.
     */
    data: XOR<MediaLibrariesCreateInput, MediaLibrariesUncheckedCreateInput>
  }

  /**
   * MediaLibraries createMany
   */
  export type MediaLibrariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaLibraries.
     */
    data: MediaLibrariesCreateManyInput | MediaLibrariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaLibraries createManyAndReturn
   */
  export type MediaLibrariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * The data used to create many MediaLibraries.
     */
    data: MediaLibrariesCreateManyInput | MediaLibrariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaLibraries update
   */
  export type MediaLibrariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * The data needed to update a MediaLibraries.
     */
    data: XOR<MediaLibrariesUpdateInput, MediaLibrariesUncheckedUpdateInput>
    /**
     * Choose, which MediaLibraries to update.
     */
    where: MediaLibrariesWhereUniqueInput
  }

  /**
   * MediaLibraries updateMany
   */
  export type MediaLibrariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaLibraries.
     */
    data: XOR<MediaLibrariesUpdateManyMutationInput, MediaLibrariesUncheckedUpdateManyInput>
    /**
     * Filter which MediaLibraries to update
     */
    where?: MediaLibrariesWhereInput
    /**
     * Limit how many MediaLibraries to update.
     */
    limit?: number
  }

  /**
   * MediaLibraries updateManyAndReturn
   */
  export type MediaLibrariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * The data used to update MediaLibraries.
     */
    data: XOR<MediaLibrariesUpdateManyMutationInput, MediaLibrariesUncheckedUpdateManyInput>
    /**
     * Filter which MediaLibraries to update
     */
    where?: MediaLibrariesWhereInput
    /**
     * Limit how many MediaLibraries to update.
     */
    limit?: number
  }

  /**
   * MediaLibraries upsert
   */
  export type MediaLibrariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * The filter to search for the MediaLibraries to update in case it exists.
     */
    where: MediaLibrariesWhereUniqueInput
    /**
     * In case the MediaLibraries found by the `where` argument doesn't exist, create a new MediaLibraries with this data.
     */
    create: XOR<MediaLibrariesCreateInput, MediaLibrariesUncheckedCreateInput>
    /**
     * In case the MediaLibraries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaLibrariesUpdateInput, MediaLibrariesUncheckedUpdateInput>
  }

  /**
   * MediaLibraries delete
   */
  export type MediaLibrariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
    /**
     * Filter which MediaLibraries to delete.
     */
    where: MediaLibrariesWhereUniqueInput
  }

  /**
   * MediaLibraries deleteMany
   */
  export type MediaLibrariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaLibraries to delete
     */
    where?: MediaLibrariesWhereInput
    /**
     * Limit how many MediaLibraries to delete.
     */
    limit?: number
  }

  /**
   * MediaLibraries without action
   */
  export type MediaLibrariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaLibraries
     */
    select?: MediaLibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MediaLibraries
     */
    omit?: MediaLibrariesOmit<ExtArgs> | null
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


  export const MediaLibrariesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    tags: 'tags',
    cutomProps: 'cutomProps',
    thumbnail: 'thumbnail',
    status: 'status',
    publishDate: 'publishDate',
    createdAt: 'createdAt',
    updated: 'updated'
  };

  export type MediaLibrariesScalarFieldEnum = (typeof MediaLibrariesScalarFieldEnum)[keyof typeof MediaLibrariesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type MediaLibrariesWhereInput = {
    AND?: MediaLibrariesWhereInput | MediaLibrariesWhereInput[]
    OR?: MediaLibrariesWhereInput[]
    NOT?: MediaLibrariesWhereInput | MediaLibrariesWhereInput[]
    id?: IntFilter<"MediaLibraries"> | number
    title?: StringFilter<"MediaLibraries"> | string
    description?: StringNullableFilter<"MediaLibraries"> | string | null
    tags?: JsonFilter<"MediaLibraries">
    cutomProps?: JsonFilter<"MediaLibraries">
    thumbnail?: StringFilter<"MediaLibraries"> | string
    status?: StringFilter<"MediaLibraries"> | string
    publishDate?: DateTimeFilter<"MediaLibraries"> | Date | string
    createdAt?: DateTimeFilter<"MediaLibraries"> | Date | string
    updated?: DateTimeFilter<"MediaLibraries"> | Date | string
  }

  export type MediaLibrariesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    cutomProps?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    publishDate?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type MediaLibrariesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: MediaLibrariesWhereInput | MediaLibrariesWhereInput[]
    OR?: MediaLibrariesWhereInput[]
    NOT?: MediaLibrariesWhereInput | MediaLibrariesWhereInput[]
    description?: StringNullableFilter<"MediaLibraries"> | string | null
    tags?: JsonFilter<"MediaLibraries">
    cutomProps?: JsonFilter<"MediaLibraries">
    thumbnail?: StringFilter<"MediaLibraries"> | string
    status?: StringFilter<"MediaLibraries"> | string
    publishDate?: DateTimeFilter<"MediaLibraries"> | Date | string
    createdAt?: DateTimeFilter<"MediaLibraries"> | Date | string
    updated?: DateTimeFilter<"MediaLibraries"> | Date | string
  }, "id" | "title">

  export type MediaLibrariesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrder
    cutomProps?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    publishDate?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
    _count?: MediaLibrariesCountOrderByAggregateInput
    _avg?: MediaLibrariesAvgOrderByAggregateInput
    _max?: MediaLibrariesMaxOrderByAggregateInput
    _min?: MediaLibrariesMinOrderByAggregateInput
    _sum?: MediaLibrariesSumOrderByAggregateInput
  }

  export type MediaLibrariesScalarWhereWithAggregatesInput = {
    AND?: MediaLibrariesScalarWhereWithAggregatesInput | MediaLibrariesScalarWhereWithAggregatesInput[]
    OR?: MediaLibrariesScalarWhereWithAggregatesInput[]
    NOT?: MediaLibrariesScalarWhereWithAggregatesInput | MediaLibrariesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MediaLibraries"> | number
    title?: StringWithAggregatesFilter<"MediaLibraries"> | string
    description?: StringNullableWithAggregatesFilter<"MediaLibraries"> | string | null
    tags?: JsonWithAggregatesFilter<"MediaLibraries">
    cutomProps?: JsonWithAggregatesFilter<"MediaLibraries">
    thumbnail?: StringWithAggregatesFilter<"MediaLibraries"> | string
    status?: StringWithAggregatesFilter<"MediaLibraries"> | string
    publishDate?: DateTimeWithAggregatesFilter<"MediaLibraries"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MediaLibraries"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"MediaLibraries"> | Date | string
  }

  export type MediaLibrariesCreateInput = {
    title: string
    description?: string | null
    tags: JsonNullValueInput | InputJsonValue
    cutomProps: JsonNullValueInput | InputJsonValue
    thumbnail?: string
    status: string
    publishDate: Date | string
    createdAt?: Date | string
    updated?: Date | string
  }

  export type MediaLibrariesUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    tags: JsonNullValueInput | InputJsonValue
    cutomProps: JsonNullValueInput | InputJsonValue
    thumbnail?: string
    status: string
    publishDate: Date | string
    createdAt?: Date | string
    updated?: Date | string
  }

  export type MediaLibrariesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    cutomProps?: JsonNullValueInput | InputJsonValue
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaLibrariesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    cutomProps?: JsonNullValueInput | InputJsonValue
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaLibrariesCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    tags: JsonNullValueInput | InputJsonValue
    cutomProps: JsonNullValueInput | InputJsonValue
    thumbnail?: string
    status: string
    publishDate: Date | string
    createdAt?: Date | string
    updated?: Date | string
  }

  export type MediaLibrariesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    cutomProps?: JsonNullValueInput | InputJsonValue
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaLibrariesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: JsonNullValueInput | InputJsonValue
    cutomProps?: JsonNullValueInput | InputJsonValue
    thumbnail?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MediaLibrariesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    cutomProps?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    publishDate?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type MediaLibrariesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MediaLibrariesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    publishDate?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type MediaLibrariesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    publishDate?: SortOrder
    createdAt?: SortOrder
    updated?: SortOrder
  }

  export type MediaLibrariesSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
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