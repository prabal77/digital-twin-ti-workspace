import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DigitalTwinCoreModule } from './digital-twin-core/digital-twin-core.module';
import { Dbconnection } from './dbconnection';
import { AasstoreService } from './digital-twin-core/aasstore/aasstore.service';


@Module({
  imports: [DigitalTwinCoreModule],
  controllers: [AppController],
  providers: [Dbconnection],
})
export class AppModule { }
