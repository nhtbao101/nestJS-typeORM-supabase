import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'slug-name' })
  slug: string;

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
  @ApiProperty({ example: 1 })
  categoryId: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  image: string;

  @IsOptional()
  @ApiProperty({ example: [] })
  variant?: string[];
}
