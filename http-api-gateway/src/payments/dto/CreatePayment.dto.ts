import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePaymentDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  userId: string;
}
