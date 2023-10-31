import { Body, Controller, Delete, Get, NotFoundException, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ChocolateService }     from './chocolate.service';
import { ChocolateCreateDTO }   from './dto/chocolate-create.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('chocolates')
@Controller('chocolates')
export class ChocolateController {
  constructor( private chocolateService: ChocolateService ) {}

  @Get()
  getAllChocolates() {
    return this.chocolateService.findAll();
  }

  @Get( ':searchTerm' )
  getChocolateById(@Param( 'searchTerm' ) searchTerm: string) {
    const chocolate = this.chocolateService.findOne( searchTerm );
    if ( !chocolate ) throw new NotFoundException( `Chocolate type with number ${searchTerm} was not found` );
    return chocolate;
  }

  @Post()
  @ApiResponse({ status: 201, description: 'A new chocolate type has been successfully created.'})
  @ApiResponse({ status: 403, description: 'Forbidden chocolate variety'})
  createChocolate( @Body() createChocolateDTO: ChocolateCreateDTO ){
    return this.chocolateService.create( createChocolateDTO );
  }

  @Patch( ':searchTerm' )
  updateChocolate(
    @Param( 'searchTerm' ) searchTerm: string,
    @Body() body: ChocolateCreateDTO ) 
  {
    return this.chocolateService.update( searchTerm, body );
  }

    @Delete( ':id' )
  deleteChocolate( @Param( 'id' ) id: string ) {
    return this.chocolateService.delete( id );
  }

}
