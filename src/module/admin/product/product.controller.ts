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

import { ProductService } from './product.service';
import { Product } from 'src/entities/product.entity';
import AdminGuard from 'src/auth/guard/admin.guard';
import { ProductDto } from 'src/module/dto/product.dto';

@Controller('/manage/product/')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  async createProduct(@Body() data: ProductDto) {
    return await this.productService.createProduct(data);
  }

  @Get()
  async getProducts() {
    return await this.productService.getProduct();
  }

  @Get(':id')
  async getProductById(@Param() param: { id: number }) {
    return await this.productService.getProductById(param.id);
  }

  @UseGuards(AdminGuard)
  @ApiBearerAuth()
  @Put(':id/update')
  async updateProduct(@Body() data: Product) {
    return await this.productService.updateProduct(data);
  }

  @UseGuards(AdminGuard)
  @ApiBearerAuth()
  @Delete(':id/delete')
  async deleteProduct(@Param() param: { id: number }) {
    return await this.productService.deleteProduct(param.id);
  }
}
