import { Test, TestingModule } from '@nestjs/testing';
import { SubmodelController } from './submodel.controller';

describe('SubmodelController', () => {
  let controller: SubmodelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubmodelController],
    }).compile();

    controller = module.get<SubmodelController>(SubmodelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
