import { Test, TestingModule } from '@nestjs/testing';
import { AasxPackageController } from './aasx-package.controller';

describe('AasxPackageController', () => {
  let controller: AasxPackageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AasxPackageController],
    }).compile();

    controller = module.get<AasxPackageController>(AasxPackageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
