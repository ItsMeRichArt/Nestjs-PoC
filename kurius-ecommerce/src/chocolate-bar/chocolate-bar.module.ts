import { Module } from '@nestjs/common';
import { ChocolateBarService } from './chocolate-bar.service';
import { ChocolateBarController } from './chocolate-bar.controller';

@Module({
  controllers: [ChocolateBarController],
  providers: [ChocolateBarService],
})
export class ChocolateBarModule {}
