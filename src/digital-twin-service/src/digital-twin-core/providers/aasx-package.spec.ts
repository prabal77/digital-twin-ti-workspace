import { Test, TestingModule } from '@nestjs/testing';
import { AasxPackage } from './aasx-package';

describe('AasxPackage', () => {
  let provider: AasxPackage;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AasxPackage],
    }).compile();

    provider = module.get<AasxPackage>(AasxPackage);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
