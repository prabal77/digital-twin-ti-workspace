import { Test, TestingModule } from '@nestjs/testing';
import { AasEnvProvider } from './aas-env-provider';

describe('AasEnvProvider', () => {
  let provider: AasEnvProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AasEnvProvider],
    }).compile();

    provider = module.get<AasEnvProvider>(AasEnvProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
