import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateHotelDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
