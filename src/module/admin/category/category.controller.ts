import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { CategoryService } from './category.service';
import AdminGuard from 'src/auth/guard/admin.guard';
import { CategoryDto } from 'src/module/dto/category.dto';

@Controller('/manage/category/')
@ApiBearerAuth()
@UseGuards(AdminGuard)
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

  @Post()
  async createCategory(@Body() category: CategoryDto) {
    return this.CategoryService.createCategory(category);
  }

  @Put(':id')
  async updateCategory(@Param('id') id: number, @Body() category: CategoryDto) {
    return await this.CategoryService.updateCategory(id, category);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: number) {
    return this.CategoryService.deleteCategory(id);
  }
}
