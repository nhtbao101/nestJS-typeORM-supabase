import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import ProductRepository from 'src/repository/product.repository';
import { CategoryService } from '../category/category.service';
import CategoryRepository from 'src/repository/category.repository';
import ImageRepository from 'src/repository/image.repository';

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
