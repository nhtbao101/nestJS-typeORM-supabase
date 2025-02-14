import {
  Column,
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

  //missing in db
  // @Column()
  // slug: string;

  @Column({ name: 'customer_id' })
  customerId: number;

  @Column()
  status: number;

  @Column({ name: 'order_date' })
  orderDate: Date;

  @Column()
  total: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'shipping_date' })
  shippingDate: Date;

  @Column({ name: 'shipping_received_date' })
  shippingReceivedDate: Date;

  @OneToMany(() => OrderItem, (orderItem) => orderItem)
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
