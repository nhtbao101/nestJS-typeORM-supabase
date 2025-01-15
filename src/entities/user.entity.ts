import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IsOptional } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export default class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'name' })
  @ApiProperty()
  fullName: string;

  @Column()
  @ApiProperty()
  email: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  password: string;

  @Column({ name: 'phone_number' })
  @ApiProperty()
  phoneNumber: string;

  @Column()
  @ApiProperty()
  address?: string;

  @Column({ name: 'created_at' })
  @ApiProperty()
  createdAt: Date;

  @Column({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  @Column({ name: 'user_role' })
  @IsOptional()
  @ApiProperty()
  userRole?: number;

  @Column()
  @IsOptional()
  @ApiProperty()
  avatar?: string;

  @OneToMany(() => Order, (order) => order.user)
  @ApiProperty()
  orders?: Order[];

  @ApiProperty()
  token?: string;
}
