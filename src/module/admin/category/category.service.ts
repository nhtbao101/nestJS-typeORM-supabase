import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ErrorMsg } from './../../../constants/error-message';

import { CategoryDto } from 'src/module/dto/category.dto';
import CategoryRepository from 'src/repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  async getCategories() {
    return this.categoryRepository.find();
  }

  async getCategoryById(id: number) {
    const category = await this.categoryRepository.findOneBy({
      id: id,
    });
    if (!category) {
      throw new HttpException(
        ErrorMsg.CATEGORY_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
    return category;
  }

  async createCategory(req: CategoryDto) {
    const checkCategory = await this.categoryRepository.findOneBy({
      name: req.name,
    });
    if (checkCategory) {
      throw new HttpException(ErrorMsg.CATEGORY_EXIST, HttpStatus.NOT_FOUND);
    }
    const category = this.categoryRepository.create(req);
    return await this.categoryRepository.save(category);
  }

  async updateCategory(id: number, category: CategoryDto) {
    await this.getCategoryById(id);
    const findCategoryByName = await this.categoryRepository.findOneBy({
      name: category.name,
    });

    if (findCategoryByName) {
      throw new HttpException(ErrorMsg.CATEGORY_EXIST, HttpStatus.NOT_FOUND);
    }
    const result = await this.categoryRepository.update(id, category);
    return result.affected > 0;
  }

  async deleteCategory(id: number): Promise<boolean> {
    await this.getCategoryById(id);
    const result = await this.categoryRepository.delete({ id: id });
    return result.affected > 0;
  }
}
