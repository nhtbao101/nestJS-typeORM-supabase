import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Expose, Type } from 'class-transformer';

import { VariantDto } from './variant';

export class ProductDto {
  @Length(5, 100)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Product name' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Product description' })
  description: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 100 })
  price: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 99 })
  quantity: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 1, name: 'category_id' })
  @Expose({ name: 'category_id' })
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  image: string;

  @IsOptional()
  @IsArray()
  @Type(() => VariantDto)
  @ApiProperty({ example: VariantDto })
  variant?: VariantDto[];
}
