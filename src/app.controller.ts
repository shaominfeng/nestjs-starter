import {Controller, Get, Logger} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    let res = '';
    try {
      res = this.appService.getHello();
    } catch (err) {
      this.logger.error('Doing something...' + new Error().stack);
    }
    return res;
  }
}
