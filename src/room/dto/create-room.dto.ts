import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { Hotel } from 'src/hotel/schemas/hotel.schema';

export class CreateRoomDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  acreage: number;

  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  typeBed: string;

  @IsNotEmpty()
  @IsNumber()
  amountCustomer: number;

  @IsNumber()
  priceOld: number;

  @IsNotEmpty()
  price: number;

  description: string;

  @IsNotEmpty()
  hotel: Hotel;
}
