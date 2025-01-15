import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class Variant {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  size: string;

  @Column()
  @ApiProperty()
  color: string;

  @Column()
  @ApiProperty()
  material: string;

  @Column()
  @ApiProperty()
  price: number;

  @Column()
  @ApiProperty()
  quantity: number;

  @Column()
  @ApiProperty()
  image: string;

  @ApiProperty()
  @ManyToOne(() => Product, (product) => product.variant)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;
}
