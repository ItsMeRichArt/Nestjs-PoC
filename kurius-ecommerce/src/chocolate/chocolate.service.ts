import { Injectable } from '@nestjs/common';
import { ChocolateRepository } from './chocolate.repository';
import { ChocolateDTO } from './dto/create-chocolate.dto';

@Injectable()
export class ChocolateService {

  constructor(private chocolateRepository: ChocolateRepository) {}

  findAll() {
    return this.chocolateRepository.findAll();
  }

  findById(id: string) {
    return this.chocolateRepository.findById(id);
  }

  createChocolate(chocolate: ChocolateDTO){
    return this.chocolateRepository.createChocolate(chocolate);
  }

  updateChocolate(id: string, chocolate: ChocolateDTO) {
    return this.chocolateRepository.updateChocolate(id, chocolate);
  }

  deleteChocolateService(id: string) {
    return this.chocolateRepository.deleteChocolateRepository(id);
  }

}
