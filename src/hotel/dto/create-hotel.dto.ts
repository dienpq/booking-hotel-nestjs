import { IsEmail, IsEmpty, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class CreateHotelDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  hotline: string;

  @IsEmail()
  email: string;

  description: string;

  star: string;
}
