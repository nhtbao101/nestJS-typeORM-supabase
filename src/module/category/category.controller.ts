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
import { CategoryDto } from '../dto/category.dto';
import AdminGuard from 'src/auth/guard/admin.guard';
import { Category } from 'src/entities/category.entity';

@Controller('/category/')
@ApiBearerAuth()
@UseGuards(AdminGuard)
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.CategoryService.getCategories();
  }

  @Get(':id')
  async getCategory(@Param() slug: string) {
    return this.CategoryService.getCategory(slug);
  }

  @Post()
  async createCategory(@Body() category: CategoryDto) {
    return this.CategoryService.createCategory(category);
  }

  @Put(':id')
  async updateCategory(@Body() category: Category) {
    return this.CategoryService.updateCategory(category);
  }

  @Delete(':id')
  async deleteCategory(@Body() param: { id: number }) {
    return this.CategoryService.deleteCategory(param.id);
  }
}
