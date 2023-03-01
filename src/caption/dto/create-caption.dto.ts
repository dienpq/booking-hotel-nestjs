import { IsNotEmpty } from 'class-validator';

export class CreateCaption {
  @IsNotEmpty()
  name: string;
}
