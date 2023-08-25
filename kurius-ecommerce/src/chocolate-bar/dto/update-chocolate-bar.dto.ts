import { PartialType } from '@nestjs/mapped-types';
import { CreateChocolateBarDto } from './create-chocolate-bar.dto';

export class UpdateChocolateBarDto extends PartialType(CreateChocolateBarDto) {}
