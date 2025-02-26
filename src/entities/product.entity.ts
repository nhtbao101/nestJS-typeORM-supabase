import {
  BeforeInsert,
  BeforeUpdate,
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
import { generateSlug } from '../shared/helper';
import { Image } from './image.entity';

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
  @ApiProperty({ example: 2 })
  price: number;

  @Expose()
  @Column()
  @ApiProperty()
  quantity: number;

  @Expose()
  @Column()
  @ApiProperty()
  discount: number;

  @Expose()
  @Column({ name: 'sold_count' })
  @ApiProperty({ name: 'sold_count' })
  soldCount: number;

  @Expose()
  @Column()
  @ApiProperty()
  thumbnail: string;

  @Expose()
  @Column()
  @ApiProperty()
  status: number;

  @Expose()
  @Column({ name: 'category_id' })
  @ApiProperty({ name: 'category_id' })
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

  @ManyToOne(() => Category, (category) => category.product)
  @JoinColumn({ name: 'category_id' })
  @ApiProperty()
  category: Category;

  @Expose()
  @OneToMany(() => Image, (images) => images.product)
  images: Image[];

  @OneToMany(
    () => Variant,
    (variant) => {
      return variant.product;
    },
    {
      nullable: true,
    },
  )
  @Expose()
  @ApiProperty()
  @JoinColumn({ name: 'id' })
  variant?: any;

  @Expose()
  @OneToMany(() => OrderItem, (orderItem: OrderItem) => orderItem.product, {
    nullable: true,
  })
  @ApiProperty()
  @JoinColumn({ name: 'id' })
  orderItems?: OrderItem[];

  @BeforeInsert()
  createSlug() {
    this.slug = generateSlug(
      this.name + '-' + parseFloat(`${Math.random() * 1000}`).toFixed(2),
    );
  }

  @BeforeUpdate()
  updateSlug() {
    this.slug = generateSlug(
      this.name + '-' + parseFloat(`${Math.random() * 1000}`).toFixed(2),
    );
  }
}
