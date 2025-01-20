import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ErrorMsg } from 'src/constants/error-message';
import { ProductDto } from 'src/module/dto/product.dto';
import CategoryRepository from 'src/repository/category.repository';
import { ProductRepository } from 'src/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
  ) {}

  async getProduct() {
    return await this.productRepository.find();
  }

  async getProductById(id: number) {
    const product = await this.productRepository.findOneBy({
      id: id,
    });

    if (!product) {
      throw new HttpException(ErrorMsg.PRODUCT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return product;
  }

  async createProduct(req: ProductDto) {
    const product = await this.productRepository.findOneBy({
      name: req.name,
    });
    if (product) {
      throw new HttpException(ErrorMsg.PRODUCT_EXIST, HttpStatus.BAD_REQUEST);
    }
    const category = await this.categoryRepository.findOneBy({
      id: req.categoryId,
    });
    if (!category) {
      throw new HttpException(
        ErrorMsg.CATEGORY_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
    const newPrd = this.productRepository.create(req);
    return await this.productRepository.save(newPrd);
  }

  async updateProduct(id: number, data: ProductDto) {
    const product = await this.getProductById(id);

    const category = await this.categoryRepository.findOneBy({
      id: data.categoryId,
    });

    if (!category) {
      throw new HttpException(
        ErrorMsg.CATEGORY_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
    Object.assign(product, data);
    const result = await this.productRepository.save(product);
    return result;
  }

  async deleteProduct(id: number) {
    await this.getProductById(id);

    const result = await this.productRepository.delete({
      id: id,
    });

    return result.affected > 0;
  }
}
