import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class VariantDto {
  @IsArray()
  @IsOptional()
  @ApiProperty({ example: ['Mini', 'Normal', 'Large'] })
  size?: string[];

  @IsOptional()
  @IsArray()
  @ApiProperty({ example: ['White', 'Yellow', 'Black'] })
  color?: string[];

  @IsOptional()
  @IsArray()
  @ApiProperty({ example: ['Gold', 'Silver', 'Brass'] })
  material?: string[];

  @IsInt()
  @Min(1)
  @ApiProperty({ example: 990 })
  price: number;

  @IsInt()
  @Min(1)
  @ApiProperty({ example: 10 })
  quantity: number;

  @IsInt()
  @ApiProperty({ example: 1 })
  productId: number;

  @IsString()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  image: string;
}
