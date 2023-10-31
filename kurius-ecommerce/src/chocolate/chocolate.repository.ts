import { BadRequestException, Injectable, NotFoundException, Delete, InternalServerErrorException } from '@nestjs/common';
import { ChocolateEntity } from './entities/chocolate.entity';
import { ChocolateCreateDTO } from './dto/chocolate-create.dto';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ChocolateRepository {

  constructor( 
    @InjectModel( ChocolateEntity.name )
    private readonly chocolateModel: Model<ChocolateEntity> 
  ) {};

  findAll() {
    return this.chocolateModel.find();
  }

  async findOne( searchTerm: string ) {

    let chocolate: ChocolateEntity;
    
    if( !isNaN( +searchTerm ) ){
      chocolate = await this.chocolateModel.findOne({ id: searchTerm });
    }

    if( !chocolate && isValidObjectId( searchTerm ) ) {
      chocolate = await this.chocolateModel.findById( searchTerm );
    }

    if ( !chocolate ) {
      chocolate = await this.chocolateModel.findOne({ name: searchTerm.toLowerCase().trim() })
    }

    if( !chocolate ) throw new NotFoundException(`Chocolat with id ${searchTerm} not found`);
    
    return chocolate;

  }

  async create( chocolateDTO: ChocolateCreateDTO ){

    chocolateDTO.name = chocolateDTO.name.toLowerCase();

    try {
      const newChocolate = await this.chocolateModel.create( chocolateDTO );
      return newChocolate;
    } catch (error) {
      this.handleExceptions( error );
    }

  }

  async update( searchTerm: string, updateChocolate: ChocolateCreateDTO ) {

    const chocolateToUpdate = await this.findOne( searchTerm );

    if( updateChocolate.name ) {
      updateChocolate.name = updateChocolate.name.toLowerCase();

      try{
        await chocolateToUpdate.updateOne( updateChocolate );
        return { ...chocolateToUpdate.toJSON(), ...updateChocolate };
      } catch (error) {
        this.handleExceptions( error );
      }
    }
      
  }
  
  async delete( id: string ) {

    const chocolate =  await this.findOne( id );
    await chocolate.deleteOne();
    return { id };

  }

  private handleExceptions( error: any ) {
    if ( error.code === 11000 ) {
      throw new BadRequestException(`Chocolate exists in db ${ JSON.stringify( error.keyValue ) }`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Chocolate - Check server logs`);
  }
    
}

