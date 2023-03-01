import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Room } from 'src/room/schema/room.schema';

export type CaptionDocument = HydratedDocument<Caption>;

@Schema({
  timestamps: true,
})
export class Caption {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Room' }] })
  rooms: Room[];
}

export const CaptionSchema = SchemaFactory.createForClass(Caption);
