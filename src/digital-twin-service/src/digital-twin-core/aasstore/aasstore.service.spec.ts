import { Test, TestingModule } from '@nestjs/testing';
import { AasstoreService } from './aasstore.service';

describe('AasstoreService', () => {
  let service: AasstoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AasstoreService],
    }).compile();

    service = module.get<AasstoreService>(AasstoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
