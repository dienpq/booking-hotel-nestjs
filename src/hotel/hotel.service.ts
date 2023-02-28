import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotel, HotelDocument } from './schemas/hotel.schema';

@Injectable()
export class HotelService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async createHotel(createHotelDto: CreateHotelDto) {
    const newHotel = new this.hotelModel(createHotelDto);
    newHotel.save();
    return newHotel;
  }

  async getHotel(id: string) {
    const hotel = await this.hotelModel.findById(id).populate('rooms');
    return hotel;
  }
}
