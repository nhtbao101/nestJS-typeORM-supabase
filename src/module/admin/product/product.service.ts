import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { ErrorMsg } from '../../../constants/error-message';
import { Product } from '../../../entities/product.entity';
import { ImageDto } from '../../../module/dto/image.dto';
import { ProductDto } from '../../../module/dto/product.dto';
import CategoryRepository from '../../../repository/category.repository';
import ImageRepository from '../../../repository/image.repository';
import ProductRepository from '../../../repository/product.repository';

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

    const imgEntity = req.images.map((img: ImageDto) => {
      const result = this.imageRepository.create({
        url: img.url,
        imageName: img.imageName,
        product: newPrd,
      });
      return result;
    });

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
