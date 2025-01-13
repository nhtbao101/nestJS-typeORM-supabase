import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'payment_date' })
  paymentDate: Date;

  @Column({ name: 'payment_method' })
  paymentMethod: number;

  @OneToMany(() => Order, (order) => order.payment)
  @JoinColumn({ name: 'orderId' })
  order: Order[];

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
