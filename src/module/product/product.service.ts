import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ErrorMsg } from 'src/constants/error-message';

import ProductRepository from 'src/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async getProduct() {
    const prd = await this.productRepository.find({
      relations: {
        images: true,
      },
    });
    return prd;
  }

  async getProductBySlug(slug: string) {
    const product = await this.productRepository.findOneBy({
      slug: slug,
    });

    if (!product) {
      throw new HttpException(ErrorMsg.PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return product;
  }
}
