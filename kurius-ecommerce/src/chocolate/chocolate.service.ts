import { Injectable }          from '@nestjs/common';
import { ChocolateRepository } from './chocolate.repository';
import { ChocolateCreateDTO }  from './dto/chocolate-create.dto';

@Injectable()
export class ChocolateService {

  constructor( private chocolateRepository: ChocolateRepository ) {}

  findAll() {
    return this.chocolateRepository.findAll();
  }

  findOne( searchTerm: string ) {
    return this.chocolateRepository.findOne( searchTerm );
  }

  create( chocolate: ChocolateCreateDTO ){
    return this.chocolateRepository.create( chocolate );
  }

  update( searchTerm: string, chocolate: ChocolateCreateDTO ) {
    return this.chocolateRepository.update( searchTerm, chocolate );
  }

  delete( id: string ) {
    return this.chocolateRepository.delete( id );
  }

}
