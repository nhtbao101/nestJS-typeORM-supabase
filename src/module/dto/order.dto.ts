import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
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
}
