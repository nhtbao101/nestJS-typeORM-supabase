import { Injectable } from '@nestjs/common';

import { Category } from 'src/entities/category.entity';
import { CategoryDto } from 'src/module/dto/category.dto';
import CategoryRepository from 'src/repository/category.repository';

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

  async createCategory(req: CategoryDto) {
    const category = this.categoryRepository.create(req);
    return await this.categoryRepository.save(category);
  }

  async updateCategory(req: Category) {
    return await this.categoryRepository.update({ id: req.id }, req);
  }

  async deleteCategory(id: number) {
    return await this.categoryRepository.delete({ id: id });
  }
}
