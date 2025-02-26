import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Category } from '../entities/category.entity';

@Injectable()
export default class CategoryRepository extends Repository<Category> {
  constructor(private dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }
}
