import { Test, TestingModule } from '@nestjs/testing';
import { ChocolateBarService } from './chocolate-bar.service';

describe('ChocolateBarService', () => {
  let service: ChocolateBarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChocolateBarService],
    }).compile();

    service = module.get<ChocolateBarService>(ChocolateBarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
