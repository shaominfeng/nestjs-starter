import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MyLoggerService} from './common/my-logger/my-logger.service';
import {LoggerErrorInterceptor} from "nestjs-pino";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(app.get(MyLoggerService));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  await app.listen(3000);
}
bootstrap();
