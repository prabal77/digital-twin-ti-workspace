import { Test, TestingModule } from '@nestjs/testing';
import { ConceptdescriptionController } from './conceptdescription.controller';

describe('ConceptdescriptionController', () => {
  let controller: ConceptdescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptdescriptionController],
    }).compile();

    controller = module.get<ConceptdescriptionController>(ConceptdescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
