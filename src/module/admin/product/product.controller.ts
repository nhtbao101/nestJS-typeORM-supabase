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
import AdminGuard from 'src/auth/guard/admin.guard';
import { ProductDto } from 'src/module/dto/product.dto';

@Controller('/manage/product/')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('create')
  async createProduct(@Body() product: ProductDto) {
    return await this.productService.createProduct(product);
  }

  @Get()
  async getProducts() {
    return await this.productService.getProduct();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number) {
    return await this.productService.getProductById(id);
  }

  @UseGuards(AdminGuard)
  @ApiBearerAuth()
  @Put(':id/update')
  async updateProduct(@Param('id') id: number, @Body() data: ProductDto) {
    return await this.productService.updateProduct(id, data);
  }

  @UseGuards(AdminGuard)
  @ApiBearerAuth()
  @Delete(':id/delete')
  async deleteProduct(@Param('id') id: number) {
    return await this.productService.deleteProduct(id);
  }
}
