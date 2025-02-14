import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { CategoryService } from './category.service';

@Controller('/category/')
@ApiBearerAuth()
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.CategoryService.getCategories();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: number) {
    return this.CategoryService.getCategoryById(id);
  }
}
