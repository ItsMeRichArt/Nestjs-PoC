import { Injectable } from '@nestjs/common';

@Injectable()
export class ChocolateService {
  private chocolates = [
    {
      id: 1,
      type: 'black',
      percentage: '70%',
    },
    {
      id: 2,
      type: 'black',
      percentage: '54%',
    },
    {
      id: 3,
      type: 'Chocolate with milk',
      percentage: '45%',
    },
    {
      id: 4,
      type: 'White',
      percentage: '35%',
    },
  ];

  findAll() {
    return this.chocolates;
  }

  findById(id: number) {
    const chocolate = this.chocolates.find((chocolate) => chocolate.id === id);
    return chocolate;
  }
}
