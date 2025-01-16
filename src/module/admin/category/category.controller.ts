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
import { Category } from 'src/entities/category.entity';
import { CategoryDto } from 'src/module/dto/category.dto';

@Controller('/manage/category/')
@ApiBearerAuth()
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.CategoryService.getCategories();
  }

  @Get(':id')
  async getCategory(@Param() id: number) {
    return this.CategoryService.getCategory(id);
  }

  @UseGuards(AdminGuard)
  @Post()
  async createCategory(@Body() category: CategoryDto) {
    return this.CategoryService.createCategory(category);
  }

  @UseGuards(AdminGuard)
  @Put(':id')
  async updateCategory(@Body() category: Category) {
    return this.CategoryService.updateCategory(category);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  async deleteCategory(@Body() param: { id: number }) {
    return this.CategoryService.deleteCategory(param.id);
  }
}
