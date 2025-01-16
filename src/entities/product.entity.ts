import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { OrderItem } from './order-item.entity';
import { Variant } from './variant.entity';
import { Category } from './category.entity';
import { generateSlug } from 'src/shared/helper';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @Expose()
  @ApiProperty()
  id: number;

  @Expose()
  @ApiProperty()
  @Column()
  slug: string;

  @Expose()
  @Column()
  @ApiProperty()
  name: string;

  @Expose()
  @Column()
  @ApiProperty()
  description: string;

  @Expose()
  @Column()
  @ApiProperty()
  image: string;

  @Expose()
  @Column()
  @ApiProperty({ example: 2 })
  price: number;

  @Expose()
  @Column()
  @ApiProperty()
  quantity: number;

  @Column({ name: 'category_id' })
  @ApiProperty({ name: 'category_id' })
  @Expose()
  categoryId: number;

  @Expose()
  @ApiHideProperty()
  @CreateDateColumn({ name: 'created_at', default: () => 'NOW()' })
  @ApiProperty()
  createdAt: Date;

  @Expose()
  @UpdateDateColumn({ name: 'updated_at', default: () => 'NOW()' })
  @ApiProperty()
  updatedAt: Date;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  @ApiProperty()
  category: Category;

  @OneToMany(() => Variant, (variant) => variant.product, {
    cascade: true,
    nullable: true,
  })
  @ApiProperty()
  @JoinColumn({ name: 'id' })
  variant?: Variant[];

  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.product)
  @ApiProperty()
  @JoinColumn({ name: 'id' })
  orderItems?: OrderItem[];

  @BeforeInsert()
  createSlug() {
    this.slug = generateSlug(
      this.name + '-' + parseFloat(`${Math.random() * 1000}`).toFixed(2),
    );
  }
}
