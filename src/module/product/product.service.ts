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
      order: {
        images: {
          id: 'ASC',
        },
      },
    });
    console.log('prd', prd);
    return prd;
  }

  async getProductBySlug(slug: string) {
    const product = await this.productRepository.findOne({
      where: {
        slug: slug,
      },
      relations: {
        images: true,
      },
      order: {
        images: {
          id: 'ASC',
        },
      },
    });

    if (!product) {
      throw new HttpException(ErrorMsg.PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return product;
  }
}
