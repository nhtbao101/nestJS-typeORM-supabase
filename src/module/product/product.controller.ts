import { Controller, Get, Param } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('/product/')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getProducts() {
    return await this.productService.getProduct();
  }

  @Get(':slug')
  async getProductBySlug(@Param('slug') slug: string) {
    return await this.productService.getProductBySlug(slug);
  }
}
