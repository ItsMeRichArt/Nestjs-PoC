import { IsString, IsUUID, MaxLength } from "class-validator";

export class ChocolateDTO {

    @IsString({ message: 'This chocolate type should be a string' })
    readonly type: string;

    @IsString({ message: 'Product description should be a string' })
    @MaxLength(180)
    readonly description: string;

}