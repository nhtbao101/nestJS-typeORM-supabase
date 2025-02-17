import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import UserGuard from 'src/auth/guard/user.guard';
import { OrderService } from './order.service';
import { OrderDto } from '../dto/order.dto';

@Controller('/order/')
@ApiBearerAuth()
@UseGuards(UserGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getOrders() {
    return this.orderService.getOrdersByUser();
  }

  @Get(':id')
  async getOrderById(@Param('id') id: number) {
    return this.orderService.getOrderById(id);
  }

  @Post()
  async createOrder(@Body() order: OrderDto) {
    return this.orderService.createOrder(order);
  }
}
