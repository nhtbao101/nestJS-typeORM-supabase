import { Controller, Get, Param } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('/product/')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProduct();
  }

  @Get(':id')
  async getProductById(@Param() param: { id: number }) {
    return await this.productService.getProductById(param.id);
  }
}
