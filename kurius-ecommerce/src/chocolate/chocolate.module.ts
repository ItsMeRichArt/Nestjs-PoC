import { Module } from '@nestjs/common';
import { ChocolateController } from './chocolate.controller';
import { ChocolateService } from './chocolate.service';
import { ChocolateRepository } from './chocolate.repository';

@Module({
  controllers: [ChocolateController],
  providers: [ChocolateService, ChocolateRepository],
})
export class ChocolateModule {}
