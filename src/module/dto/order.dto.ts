import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';
import { Column } from 'typeorm';

export class OrderDto {
  @Column({ name: 'order_date' })
  @IsNotEmpty()
  orderDate: Date;

  @Column()
  @IsInt()
  @IsNotEmpty()
  @ApiProperty({ example: 1 })
  status: number;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  @ApiProperty({ example: 0 })
  total: number;

  @Column({ name: 'shipping_date' })
  @IsNotEmpty()
  @ApiProperty({ name: 'shipping_date' })
  shippingDate: Date;

  @Column({ name: 'shipping_received_date' })
  @IsNotEmpty()
  @ApiProperty({ name: 'shipping_received_date' })
  shippingReceivedDate: Date;

  @IsString()
  @Column({ name: 'shipping_address' })
  @IsNotEmpty()
  @ApiProperty({ name: 'shipping_address' })
  shippingAddress: string;
}
