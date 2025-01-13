import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin')
export default class Admin {
  constructor(partial: Partial<Admin>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ name: 'full_name' })
  @ApiProperty()
  fullName: string;

  @Column()
  @ApiProperty()
  email: string;

  @Exclude({ toPlainOnly: true })
  @Column()
  password: string;

  @Column()
  @ApiProperty()
  @Expose()
  avatar?: string;

  @Column({ name: 'created_at' })
  @ApiProperty()
  createdAt: Date;

  @Column({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: Date;

  @Expose()
  @Column({ name: 'role_id' })
  @ApiProperty()
  roleId: number;

  @ApiProperty()
  token?: string;
}
