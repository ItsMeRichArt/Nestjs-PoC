import { Module } from '@nestjs/common';
import { ChocolateController } from './chocolate.controller';
import { ChocolateService } from './chocolate.service';
import { ChocolateRepository } from './chocolate.repository';

const chocolateProviders = [ChocolateService, ChocolateRepository];

@Module({
  controllers: [ChocolateController],
  providers: [...chocolateProviders],
})
export class ChocolateModule {}
