import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Category name' })
  name: string;

  // @IsString()
  // @IsNotEmpty()
  // @ApiProperty({ example: 'slug-name' })
  // slug: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Category description' })
  description: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  image: string;
}
