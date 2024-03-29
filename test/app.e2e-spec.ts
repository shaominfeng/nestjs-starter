import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';

import { MyLoggerModule } from '../src/common/my-logger/my-logger.module';
import { CategoriesModule } from '../src/modules/categories/categories.module';
import { CatsModule } from '../src/modules/cats/cats.module';
import { HealthModule } from '../src/modules/health/health.module';
import { UsersModule } from '../src/modules/users/users.module';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, CategoriesModule, UsersModule, HealthModule, CatsModule, MyLoggerModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect('Hello World!');
  });
});
