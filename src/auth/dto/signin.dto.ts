import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @Length(8, 50)
  @ApiProperty({ example: 'nhtbao101@gmail.com' })
  email: string;

  @IsNotEmpty()
  @Length(6, 50)
  @ApiProperty({ example: 'Abcd1234' })
  password: string;
}
