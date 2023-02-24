import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Controller('hotel')
export class HotelController {
  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return 'This action adds a new hotel';
  }
}
