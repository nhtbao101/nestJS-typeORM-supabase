import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ErrorMsg } from 'src/constants/error-message';
import { Product } from 'src/entities/product.entity';
import { ProductDto } from 'src/module/dto/product.dto';
import CategoryRepository from 'src/repository/category.repository';
import ImageRepository from 'src/repository/image.repository';
import ProductRepository from 'src/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private imageRepository: ImageRepository,
  ) {}

  async getProduct(): Promise<Product[]> {
    return await this.productRepository.find();
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
    await this.productRepository.save(newPrd);

    const imgEntity = req.image.map((img) =>
      this.imageRepository.create({ ...img, product: newPrd }),
    );
    await this.imageRepository.save(imgEntity);

    return { ...newPrd, image: imgEntity };
  }

  async updateProduct(slug: string, data: ProductDto) {
    const product = await this.getProductBySlug(slug);

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

  async deleteProduct(slug: string) {
    await this.getProductBySlug(slug);

    const result = await this.productRepository.delete({
      slug: slug,
    });

    return result.affected > 0;
  }
}
