import { Module }              from '@nestjs/common';
import { ChocolateController } from './chocolate.controller';
import { ChocolateService }    from './chocolate.service';
import { ChocolateRepository } from './chocolate.repository';
import { MongooseModule }      from '@nestjs/mongoose';
import { ChocolateEntity, ChocolateSchema } from './entities/chocolate.entity';

const chocolateProviders = [ ChocolateService, ChocolateRepository ];

@Module({
  controllers: [ ChocolateController ],
  providers  : [...chocolateProviders],
  imports    : [ MongooseModule.forFeature([
    { 
      name  : ChocolateEntity.name, 
      schema: ChocolateSchema 
    }
  ])]
})

export class ChocolateModule {}
