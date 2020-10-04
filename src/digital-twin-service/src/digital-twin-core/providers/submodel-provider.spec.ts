import { Test, TestingModule } from '@nestjs/testing';
import { SubmodelProvider } from './submodel-provider';

describe('SubmodelProvider', () => {
  let provider: SubmodelProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmodelProvider],
    }).compile();

    provider = module.get<SubmodelProvider>(SubmodelProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
