import { BadRequestException, Injectable, NotFoundException, Delete } from '@nestjs/common';
import { ChocolateEntity } from './entities/chocolate.entity';
import {v4 as uuid } from 'uuid';
import { ChocolateDTO } from './dto/create-chocolate.dto';

@Injectable()
export class ChocolateRepository {

  private chocolates: ChocolateEntity[] = [{
    id: uuid(),
    type: 'bar',
    description: 'Chocolate in bar presentation of 50g for final costumers',
  }, {
    id: uuid(),
    type: 'coberture',
    description: 'Professional chocolate of 1kg and 2.kg for professional usage',
  }, {
    id: uuid(),
    type: 'chocolatin',
    description: 'Short bar of chocolate of 6g for bakary usage',
  }];

  findAll() {
    return this.chocolates;
  }

  findById(id: string) {
    const chocolate = this.chocolates.find(chocolate => chocolate.id === id);

    if (!chocolate) throw new NotFoundException(`Chocolate type with id ${id} was not found`);

    return chocolate;
  }

  createChocolate(chocolateDTO: ChocolateDTO){
    const newChocolate: ChocolateEntity = {
      id: uuid(),
      ...chocolateDTO
    };

    this.chocolates.push(newChocolate);
    return newChocolate;
  }

  updateChocolate(id: string, updateChocolate: ChocolateDTO) {
    let chocolateToUpdate = this.findById(id);

    if ( chocolateToUpdate.id && chocolateToUpdate.id !== id) 
      throw new BadRequestException();

    this.chocolates = this.chocolates.map( chocolate => {

      if(chocolate.id === id) {
        chocolateToUpdate = { ...chocolateToUpdate, ...updateChocolate }
        return chocolateToUpdate;
      }

      return chocolate;
    });

    return chocolateToUpdate;
  }

  deleteChocolateRepository(id: string) {
    const chocolate = this.findById(id);

    if (chocolate) {
      this.chocolates.splice(this.chocolates.indexOf(chocolate), 1);
    } 

    return this.chocolates;
  }
  
}