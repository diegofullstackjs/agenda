import { Test, TestingModule } from '@nestjs/testing';
import Services  from './services';

describe('Services', () => {
  let provider: Services;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Services],
    }).compile();

    provider = module.get<Services>(Services);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
