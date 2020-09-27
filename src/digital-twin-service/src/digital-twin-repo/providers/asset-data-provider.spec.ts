import { Test, TestingModule } from '@nestjs/testing';
import { AssetDataProvider } from './asset-data-provider';

describe('AssetDataProvider', () => {
  let provider: AssetDataProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssetDataProvider],
    }).compile();

    provider = module.get<AssetDataProvider>(AssetDataProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
