import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';
import customConfig from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './modules/cats/cats.module';
import {MyLoggerModule} from "./common/my-logger/my-logger.module";
import {ThrottlerModule} from "@nestjs/throttler";
import {BullModule} from "@nestjs/bull";
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
        useFactory: async  (configService: ConfigService) => ({
          redis:{
            host: configService.get('3rdParties.redis.host'),
            port: configService.get('3rdParties.redis.host'),
          }
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
    MyLoggerModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
