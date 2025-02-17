import { IsNotEmpty, IsString } from 'class-validator';

export class ImageDto {
  @IsNotEmpty()
  @IsString()
  url: string;

  imageName?: string;

  @IsNotEmpty()
  productId: number;
}
