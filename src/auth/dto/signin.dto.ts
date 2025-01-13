import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'nhtbao101@gmail.com' })
  email: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Abcd1234' })
  password: string;
}
