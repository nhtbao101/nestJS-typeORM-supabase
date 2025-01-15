import { Module } from '@nestjs/common';

import OrderRepository from 'src/module/order/order.repository';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
