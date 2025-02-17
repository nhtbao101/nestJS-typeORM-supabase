import { Module } from '@nestjs/common';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import OrderRepository from 'src/repository/order.repository';
import { ProductService } from '../product/product.service';
import ProductRepository from 'src/repository/product.repository';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, ProductService, ProductRepository],
})
export class OrderModule {}
