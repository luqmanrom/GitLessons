import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("supernyummy")
  getsupernyummy(): string {
    return this.appService.getsupernyummy();
  }


  @Get('nom')
  getnom(): string {
    return this.appService.getHello();
  
  @Get('pompompurin')
  getpompompurin(): string {
    return this.appService.getpompompurin();

  }
}
