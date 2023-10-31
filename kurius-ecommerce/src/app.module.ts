import { Module }          from '@nestjs/common';
import { ChocolateModule } from './chocolate/chocolate.module';
import { MongooseModule }  from '@nestjs/mongoose';

const modules = [ ChocolateModule, MongooseModule.forRoot( 'mongodb://localhost:27017/kurius-chocolate' ) ];

@Module({
  imports:     [...modules],
  controllers: [],
  providers:   [],
  exports:     [],
})

export class AppModule {}
