import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CategoryDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 50)
  @ApiProperty({ example: 'Category name' })
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'slug-name' })
  slug?: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 1000)
  @ApiProperty({ example: 'Category description' })
  description: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: 'https://picsum.photos/200' })
  image: string;
}
