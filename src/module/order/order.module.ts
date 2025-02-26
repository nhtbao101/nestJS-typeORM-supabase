import { Module } from '@nestjs/common';

import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import OrderRepository from '../../repository/order.repository';
import { ProductService } from '../product/product.service';
import ProductRepository from '../../repository/product.repository';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, ProductService, ProductRepository],
})
export class OrderModule {}
