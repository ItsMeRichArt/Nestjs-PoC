import { Test, TestingModule } from '@nestjs/testing';
import { ChocolateBarController } from './chocolate-bar.controller';
import { ChocolateBarService } from './chocolate-bar.service';

describe('ChocolateBarController', () => {
  let controller: ChocolateBarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChocolateBarController],
      providers: [ChocolateBarService],
    }).compile();

    controller = module.get<ChocolateBarController>(ChocolateBarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
