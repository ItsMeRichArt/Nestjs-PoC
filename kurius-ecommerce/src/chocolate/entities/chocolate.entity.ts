import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ChocolateEntity extends Document{

  @Prop({ unique: true, required: true, index: true })
  number: string;
  
  @Prop({ unique: true, index: true })
  name: string;

  @Prop()
  description: string;

}

export const ChocolateSchema = SchemaFactory.createForClass( ChocolateEntity );