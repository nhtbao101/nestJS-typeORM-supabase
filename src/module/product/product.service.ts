import { Injectable } from '@nestjs/common';

import { ProductRepository } from 'src/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProduct() {
    return await this.productRepository.find();
  }

  async getProductById(id: number) {
    return await this.productRepository.findOneBy({
      id: id,
    });
  }
}
