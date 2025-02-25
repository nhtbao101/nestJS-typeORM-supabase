import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';

import { VariantDto } from './variant';
import { ImageDto } from './image.dto';

export class ProductDto {
  @Length(2, 100)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Product name' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 1000)
  @ApiProperty({ example: 'Product description' })
  description: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty({ example: 100 })
  price: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @ApiProperty({ example: 99 })
  quantity: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 99 })
  status: number;

  @IsInt()
  @IsNotEmpty()
  @Expose({ name: 'category_id' })
  @ApiProperty({ example: 1, name: 'category_id' })
  @Transform((value) => {
    return Number(value.obj.categoryId);
  })
  categoryId: number;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ example: ['https://picsum.photos/200'] })
  images: ImageDto[];

  @IsOptional()
  // @IsArray()
  @Expose({ name: 'variant' })
  // @Type(() => VariantDto)
  @ApiProperty({ example: VariantDto })
  variant?: any;
}
