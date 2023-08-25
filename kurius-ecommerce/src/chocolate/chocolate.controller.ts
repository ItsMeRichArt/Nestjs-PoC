import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ChocolateService } from './chocolate.service';

@Controller('chocolate')
export class ChocolateController {
  constructor(private chocolateService: ChocolateService) {}

  @Get()
  getAllChocolates() {
    return this.chocolateService.findAll();
  }

  @Get(':id')
  getChocolateById(@Param('id', ParseIntPipe) id: number) {
    return this.chocolateService.findById(id);
  }
}
