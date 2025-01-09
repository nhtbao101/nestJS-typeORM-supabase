import { Column, Entity, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

import { VariantEntity } from './variant.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  name: string;

  @Column()
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  image: string;

  @Column({ name: 'category_id' })
  @ApiProperty()
  categoryId: number;

  @Column()
  @ApiProperty()
  price: number;

  @Column()
  @ApiProperty()
  quantity: number;

  @Column({ name: 'created_at' })
  @ApiProperty()
  createAt: Date;

  @Column({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  @JoinTable()
  @ApiProperty()
  variant: VariantEntity;
}
