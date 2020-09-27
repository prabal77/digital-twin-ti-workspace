import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DigitalTwinRepoModule } from './digital-twin-repo/digital-twin-repo.module';
import { DigitalTwinCoreModule } from './digital-twin-core/digital-twin-core.module';

@Module({
  imports: [DigitalTwinRepoModule, DigitalTwinCoreModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
