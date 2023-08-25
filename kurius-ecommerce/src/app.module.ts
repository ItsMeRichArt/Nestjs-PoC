import { Module } from '@nestjs/common';
import { ChocolateBarModule } from './chocolate-bar/chocolate-bar.module';
import { ChocolateModule } from './chocolate/chocolate.module';

@Module({
  imports: [ChocolateBarModule, ChocolateModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
