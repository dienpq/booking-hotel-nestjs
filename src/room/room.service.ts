import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel, HotelDocument } from 'src/hotel/schemas/hotel.schema';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room, RoomDocument } from './schema/room.schema';

@Injectable()
export class RoomService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<RoomDocument>,
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async createRoom(createRoomDto: CreateRoomDto) {
    try {
      const newRoom = new this.roomModel(createRoomDto);
      newRoom.save();

      const hotel = await this.hotelModel.findById(createRoomDto.hotel);
      hotel.rooms.push(newRoom);
      hotel.save();

      return newRoom;
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }

  async getRoom(id: string) {
    const room = await this.roomModel.findById(id);
    return room.populate('hotel');
  }
}
