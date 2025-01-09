import { ProductRepository } from './product.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProduct() {
    return await this.productRepository.find();
  }
}
