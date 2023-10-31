import { IsString, MaxLength } from "class-validator";

export class ChocolateCreateDTO {

    @IsString({ message: 'This chocolate id should be a string' })
    readonly number: string;

    @IsString({ message: 'This chocolate name should be a string' })
    name: string;

    @IsString({ message: 'Product description should be a string' })
    @MaxLength(180)
    description: string;

}