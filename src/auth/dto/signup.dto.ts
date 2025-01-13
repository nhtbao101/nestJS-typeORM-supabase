import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class SignUpUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Abcd1234' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'MegaTron' })
  fullName: string;

  @IsPhoneNumber('VN')
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '84912345678' })
  phoneNumber: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '23 An Nhon 11, Da Nang' })
  address?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  avatar?: string;

  @IsInt()
  @ApiProperty({ example: 1 })
  userRole?: number;
}

export class SignUpAdminDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Abcd1234' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Admin name' })
  fullName: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  avatar?: string;

  @IsOptional()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  roleId: number;
}
