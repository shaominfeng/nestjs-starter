import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';

import { MyLoggerModule } from './common/my-logger/my-logger.module';
import customConfig from './config';
import { CategoriesModule } from './modules/categories/categories.module';
import { HealthModule } from './modules/health/health.module';
@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [customConfig],
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('3rdParties.redis.host'),
          port: configService.get('3rdParties.redis.host'),
        },
      }),
    }),
    BullModule.registerQueue({
      name: 'queue',
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get('mongodb.cats.uri'),
    //     connectionName: configService.get('mongodb.cats.name'),
    //   }),
    //   connectionName: 'cats',
    // }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get('mongodb.users.uri'),
    //     connectionName: configService.get('mongodb.users.name'),
    //   }),
    //   connectionName: 'users',
    // }),
    CategoriesModule,
    // UsersModule,
    HealthModule,
    // CatsModule,
    MyLoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
