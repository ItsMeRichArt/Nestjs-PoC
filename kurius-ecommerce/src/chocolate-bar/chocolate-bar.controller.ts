import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChocolateBarService } from './chocolate-bar.service';
import { CreateChocolateBarDto } from './dto/create-chocolate-bar.dto';
import { UpdateChocolateBarDto } from './dto/update-chocolate-bar.dto';

@Controller('chocolate-bar')
export class ChocolateBarController {
  constructor(private readonly chocolateBarService: ChocolateBarService) {}

  @Post()
  create(@Body() createChocolateBarDto: CreateChocolateBarDto) {
    return this.chocolateBarService.create(createChocolateBarDto);
  }

  @Get()
  findAll() {
    return this.chocolateBarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chocolateBarService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChocolateBarDto: UpdateChocolateBarDto,
  ) {
    return this.chocolateBarService.update(+id, updateChocolateBarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chocolateBarService.remove(+id);
  }
}
