import { Test, TestingModule } from '@nestjs/testing';
import { AssetProvider } from './asset-provider';

describe('AssetProvider', () => {
  let provider: AssetProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetProvider],
    }).compile();

    provider = module.get<AssetProvider>(AssetProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
