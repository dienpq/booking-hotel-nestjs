import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Room } from 'src/room/schema/room.schema';

export type HotelDocument = HydratedDocument<Hotel>;

@Schema({
  timestamps: true,
})
export class Hotel {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  hotline: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  description: string;

  @Prop()
  star: number;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }] })
  rooms: Room[];
}

export const HotelSchema = SchemaFactory.createForClass(Hotel);
