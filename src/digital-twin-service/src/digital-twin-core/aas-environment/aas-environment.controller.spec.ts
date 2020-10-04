import { Test, TestingModule } from '@nestjs/testing';
import { AasEnvironmentController } from './aas-environment.controller';

describe('AasEnvironmentController', () => {
  let controller: AasEnvironmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AasEnvironmentController],
    }).compile();

    controller = module.get<AasEnvironmentController>(AasEnvironmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
