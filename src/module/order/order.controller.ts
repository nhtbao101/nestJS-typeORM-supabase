import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import AdminGuard from 'src/auth/guard/admin.guard';
import UserGuard from 'src/auth/guard/user.guard';
import { Order } from 'src/entities/order.entity';
import { OrderService } from './order.service';
import { OrderDto } from '../dto/order.dto';

@Controller('/order/')
@ApiBearerAuth()
@UseGuards(AdminGuard, UserGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getOrders() {
    return this.orderService.getOrdersByUser();
  }

  @Get(':id')
  async getOrderById(@Param() param: { id: number }) {
    return this.orderService.getOrderById(param.id);
  }

  @Post()
  async createOrder(@Body() order: OrderDto) {
    return this.orderService.createOrder(order);
  }

  @Put(':id')
  async updateOrder(@Body() order: Order) {
    return this.orderService.updateOrder(order);
  }
}
