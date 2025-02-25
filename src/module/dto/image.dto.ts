import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ImageDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  @IsString()
  @IsOptional()
  imageName?: string;
}
