import { Test, TestingModule } from '@nestjs/testing';
import { AasProvider } from './aas-provider';

describe('AasProvider', () => {
  let provider: AasProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AasProvider],
    }).compile();

    provider = module.get<AasProvider>(AasProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
