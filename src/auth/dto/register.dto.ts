import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  account: string;

  @IsNotEmpty()
  password: string;
}
