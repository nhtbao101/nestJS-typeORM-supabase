import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import ProductRepository from '../../../repository/product.repository';
import { CategoryService } from '../category/category.service';
import CategoryRepository from '../../../repository/category.repository';
import ImageRepository from '../../../repository/image.repository';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    ProductRepository,
    CategoryService,
    CategoryRepository,
    ImageRepository,
  ],
})
export class ProductModule {}
