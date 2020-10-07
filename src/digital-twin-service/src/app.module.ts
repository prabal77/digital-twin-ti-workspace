import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DigitalTwinCoreModule } from './digital-twin-core/digital-twin-core.module';
import { Dbconnection } from './dbconnection';
import { AasstoreService } from './aasstore/aasstore.service';

@Module({
  imports: [DigitalTwinCoreModule],
  controllers: [AppController],
  providers: [Dbconnection, AasstoreService],
})
export class AppModule { }
