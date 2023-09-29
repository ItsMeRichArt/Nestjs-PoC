import { Module } from '@nestjs/common';
import { ChocolateModule } from './chocolate/chocolate.module';

const modules = [ChocolateModule];

@Module({
  imports: [...modules],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
