import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { OrderItem } from './order-item.entity';
import { Payment } from './payment.entity';
import User from './user.entity';
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'customer_id' })
  customerId: number;

  @Column()
  status: number;

  @Column()
  total: number;

  @Column()
  note: string;

  @CreateDateColumn({ name: 'created_at', default: () => 'NOW()' })
  createdAt: Date;

  @CreateDateColumn({ name: 'order_date', default: () => 'NOW()' })
  orderDate: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'shipping_date' })
  shippingDate: Date;

  @Column({ name: 'shipping_received_date' })
  shippingReceivedDate: Date;

  @Column({ name: 'shipping_address' })
  shippingAddress: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @OneToOne(() => Payment, (payment) => payment.order, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  payment: Payment;

  @ManyToOne(() => User, (user) => user.orders)
  @JoinColumn({ name: 'customer_id' })
  user: User;
}
