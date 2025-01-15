import { Injectable } from '@nestjs/common';

import { CategoryDto } from '../dto/category.dto';
import CategoryRepository from './category.repository';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getCategories() {
    return this.categoryRepository.find();
  }

  async getCategory(slug: string) {
    return this.categoryRepository.findOneBy({
      slug: slug,
    });
  }

  async createCategory(req: CategoryDto) {
    const category = this.categoryRepository.create(req);
    return await this.categoryRepository.save(category);
  }

  async updateCategory(req: Category) {
    return await this.categoryRepository.update({ slug: req.slug }, req);
  }

  async deleteCategory(id: number) {
    return await this.categoryRepository.delete({ id: id });
  }
}
