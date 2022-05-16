import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './common/my-logger/my-logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useLogger(new MyLogger());
  await app.listen(3000);
}
bootstrap();
