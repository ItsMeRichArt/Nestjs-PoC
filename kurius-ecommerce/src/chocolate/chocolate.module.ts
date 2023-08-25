import { Module } from '@nestjs/common';
import { ChocolateController } from './chocolate.controller';
import { ChocolateService } from './chocolate.service';

@Module({
  controllers: [ChocolateController],
  providers: [ChocolateService],
})
export class ChocolateModule {}
