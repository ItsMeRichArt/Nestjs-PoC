import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ChocolateService } from './chocolate.service';
import { ChocolateDTO } from './dto/create-chocolate.dto';

@Controller('chocolate')
export class ChocolateController {
  constructor(private chocolateService: ChocolateService) {}

  @Get()
  getAllChocolates() {
    return this.chocolateService.findAll();
  }

  @Get(':id')
  getChocolateById(@Param('id', ParseUUIDPipe) id: string) {
    return this.chocolateService.findById(id);
  }

  @Post()
  createChocolate(@Body() createChocolateDTO: ChocolateDTO){
    return this.chocolateService.createChocolate(createChocolateDTO);
  }

  @Patch(':id')
  updateChocolate(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: ChocolateDTO) 
  {
    return this.chocolateService.updateChocolate(id, body);
  }

  @Delete(':id')
  deleteChocolate(@Param('id', ParseUUIDPipe) id: string) {
    return this.chocolateService.deleteChocolateService(id);
  }

}
