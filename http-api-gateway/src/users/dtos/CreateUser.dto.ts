import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  username: string;

  @IsOptional()
  @IsString()
  @MaxLength(64)
  displayName?: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
