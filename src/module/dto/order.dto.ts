import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OrderDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  status: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  customerId: number;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({
    example: [
      { productId: 13, quantity: 2 },
      { productId: 8, quantity: 4 },
    ],
  })
  orderItems: any;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Just a note' })
  note: string;

  @IsNotEmpty()
  @ApiProperty({ name: 'shipping_date' })
  shippingDate: Date;

  @IsNotEmpty()
  @ApiProperty({ name: 'shipping_received_date' })
  shippingReceivedDate: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    name: 'shipping_address',
    example: '23 An Nhon 11, Son Tra, Da Nang',
  })
  shippingAddress: string;
}
