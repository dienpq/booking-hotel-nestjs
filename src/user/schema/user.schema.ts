import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  account: string;

  @Prop()
  password: string;

  @Prop()
  role: number;

  @Prop()
  fullname: string;

  @Prop()
  birthday: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  introduce: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
