import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() { }

  /**
   * returns swagger document which describes all the REST end points
   */
  @Get()
  getSwaggerDocument(): string {
    return "'Hello World!'";
  }
}
