import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VariantEntity {
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

  @Column({ name: 'product_id' })
  @ApiProperty()
  productId: number;

  @Column({ name: 'create_at' })
  @ApiProperty()
  createAt: Date;

  @Column({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  @Column()
  @ApiProperty()
  image: string;
}
