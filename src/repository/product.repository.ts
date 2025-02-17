import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export default class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }
}
