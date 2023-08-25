import { Injectable } from '@nestjs/common';
import { ChocolateRepository } from './chocolate.repository';

@Injectable()
export class ChocolateService {
  constructor(private chocolateRepository: ChocolateRepository) {}

  findAll() {
    return this.chocolateRepository.findAll;
  }

  findById(id: number) {
    const chocolate = this.chocolateRepository.findById(id);
    return chocolate;
  }
}
