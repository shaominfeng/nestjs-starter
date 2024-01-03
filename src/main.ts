import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import { LoggerErrorInterceptor } from 'nestjs-pino';

import { AppModule } from './app.module';
import { MyLoggerService } from './common/my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(MyLoggerService));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  app.use(helmet());
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
