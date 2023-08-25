import { Injectable } from '@nestjs/common';
import { CreateChocolateBarDto } from './dto/create-chocolate-bar.dto';
import { UpdateChocolateBarDto } from './dto/update-chocolate-bar.dto';

@Injectable()
export class ChocolateBarService {
  create(createChocolateBarDto: CreateChocolateBarDto) {
    return 'This action adds a new chocolateBar';
  }

  findAll() {
    return `This action returns all chocolateBar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chocolateBar`;
  }

  update(id: number, updateChocolateBarDto: UpdateChocolateBarDto) {
    return `This action updates a #${id} chocolateBar`;
  }

  remove(id: number) {
    return `This action removes a #${id} chocolateBar`;
  }
}
