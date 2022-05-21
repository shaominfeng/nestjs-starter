import { Module } from '@nestjs/common';
import {MyLoggerService} from './my-logger.service'
import {LoggerModule} from "nestjs-pino";
@Module({
  imports: [LoggerModule.forRoot()],
  providers: [MyLoggerService],
  exports: [MyLoggerService],
})
export class MyLoggerModule {}
