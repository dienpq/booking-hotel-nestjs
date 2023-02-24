import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelController } from './hotel.controller';
import { HotelService } from './hotel.service';
import { Hotel, HotelSchema } from './schemas/hotel.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hotel.name,
        schema: HotelSchema,
      },
    ]),
  ],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
