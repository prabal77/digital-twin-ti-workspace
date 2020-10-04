import { Test, TestingModule } from '@nestjs/testing';
import { ConceptDescriptionController } from './concept-description.controller';

describe('ConceptDescriptionController', () => {
  let controller: ConceptDescriptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptDescriptionController],
    }).compile();

    controller = module.get<ConceptDescriptionController>(ConceptDescriptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
