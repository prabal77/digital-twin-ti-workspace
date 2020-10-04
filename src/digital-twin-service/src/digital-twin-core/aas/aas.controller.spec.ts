import { Test, TestingModule } from '@nestjs/testing';
import { AasController } from './aas.controller';

describe('AasController', () => {
  let controller: AasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AasController],
    }).compile();

    controller = module.get<AasController>(AasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
