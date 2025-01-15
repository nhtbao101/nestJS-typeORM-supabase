import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';

import { Product } from 'src/entities/product.entity';
import { ProductRepository } from './product.repository';
import { ProductDto } from '../dto/product.dto';

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

  async createProduct(productDto: ProductDto): Promise<Product> {
    console.log('productDto');
    // const product = this.productRepository.create(productDto);
    const product = plainToInstance(Product, productDto);
    console.log('product', product);
    return await this.productRepository.save(product);
  }

  async updateProduct(data: Product) {
    return await this.productRepository.update(
      {
        id: data.id,
      },
      data,
    );
  }

  async deleteProduct(id: number) {
    return await this.productRepository.delete({
      id: id,
    });
  }
}
