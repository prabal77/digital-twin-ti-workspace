import { Test, TestingModule } from '@nestjs/testing';
import { ConceptDescriptionProvider } from './concept-description-provider';

describe('ConceptDescriptionProvider', () => {
  let provider: ConceptDescriptionProvider;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptDescriptionProvider],
    }).compile();

    provider = module.get<ConceptDescriptionProvider>(ConceptDescriptionProvider);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
