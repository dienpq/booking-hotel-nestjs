import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema()
export class Hotel {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  hotline: string;

  @Prop()
  email: string;

  @Prop()
  description: string;

  @Prop()
  star: string;
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
