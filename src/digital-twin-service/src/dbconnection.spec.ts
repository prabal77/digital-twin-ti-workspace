import { Test, TestingModule } from '@nestjs/testing';
import { Dbconnection } from './dbconnection';

describe('Dbconnection', () => {
  let provider: Dbconnection;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Dbconnection],
    }).compile();

    provider = module.get<Dbconnection>(Dbconnection);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
