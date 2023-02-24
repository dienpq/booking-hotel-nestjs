import { Controller } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common/decorators';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { HotelService } from './hotel.service';

@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.createHotel(createHotelDto);
  }

  @Get(':id')
  async getHotel(@Param('id') id: string) {
    return this.hotelService.getHotel(id);
  }
}
