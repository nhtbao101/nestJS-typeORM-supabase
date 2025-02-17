import { IsInt, IsOptional } from 'class-validator';

export class OrderItemDto {
  @IsInt()
  orderId: number;

  @IsInt()
  @IsOptional()
  customerId?: number;

  @IsInt()
  quantity: number;

  @IsInt()
  price: number;

  @IsInt()
  subtotal: number;
}
