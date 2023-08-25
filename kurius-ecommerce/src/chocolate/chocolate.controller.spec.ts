import { Test, TestingModule } from '@nestjs/testing';
import { ChocolateController } from './chocolate.controller';

describe('ChocolateController', () => {
  let controller: ChocolateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChocolateController],
    }).compile();

    controller = module.get<ChocolateController>(ChocolateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
