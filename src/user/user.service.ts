import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(registerDto: RegisterDto) {
    const newUser = new this.userModel(registerDto);
    newUser.save();
    return newUser;
  }

  async getUser(payload: object) {
    const user = this.userModel.findOne(payload);
    return user;
  }

  async getUserProfile(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }
}
