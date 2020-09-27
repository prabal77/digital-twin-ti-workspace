import { Test, TestingModule } from '@nestjs/testing';
import { AasenvironmentController } from './aasenvironment.controller';

describe('AasenvironmentController', () => {
  let controller: AasenvironmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AasenvironmentController],
    }).compile();

    controller = module.get<AasenvironmentController>(AasenvironmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
