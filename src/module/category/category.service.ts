import { Injectable } from '@nestjs/common';

import CategoryRepository from '../../repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getCategories() {
    return this.categoryRepository.find();
  }

  async getCategory(id: number) {
    return this.categoryRepository.findOneBy({
      id: id,
    });
  }
}
