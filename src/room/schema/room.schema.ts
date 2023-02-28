import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Hotel } from 'src/hotel/schemas/hotel.schema';

export type RoomDocument = HydratedDocument<Room>;

@Schema({
  timestamps: true,
})
export class Room {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  acreage: number;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  typeBed: string;

  @Prop({ required: true })
  amountCustomer: number;

  @Prop()
  priceOld: number;

  @Prop({ required: true })
  price: number;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' })
  hotel: Hotel;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
