import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { UsersModule } from './modules/users/users.module';
import { HealthModule } from './modules/health/health.module';
import customConfig from './config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './modules/cats/cats.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [customConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('mongodb.cats.uri'),
        connectionName: configService.get('mongodb.cats.name'),
      }),
      connectionName: 'cats',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('mongodb.users.uri'),
        connectionName: configService.get('mongodb.users.name'),
      }),
      connectionName: 'users',
    }),
    CategoriesModule,
    UsersModule,
    HealthModule,
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
