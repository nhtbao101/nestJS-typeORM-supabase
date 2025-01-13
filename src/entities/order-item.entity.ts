import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { Order } from './order.entity';

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => Product, (product: Product) => product.orderItems)
  @JoinColumn({ name: 'productId' })
  product: Product;

  @ManyToOne(() => Order, (order: Order) => order.orderItems)
  @JoinColumn({ name: 'orderId' })
  order: Order;
}
