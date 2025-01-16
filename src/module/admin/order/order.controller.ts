import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import AdminGuard from 'src/auth/guard/admin.guard';
import { Order } from 'src/entities/order.entity';
import { OrderService } from './order.service';
import { OrderDto } from 'src/module/dto/order.dto';

@Controller('/manage/order/')
@ApiBearerAuth()
@UseGuards(AdminGuard)
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  async getOrders(): Promise<Order[]> {
    return await this.orderService.getOrdersByUser();
  }

  @Get(':id')
  async getOrderById(@Param() param: { id: number }): Promise<Order> {
    return await this.orderService.getOrderById(param.id);
  }

  @Post()
  async createOrder(@Body() order: OrderDto): Promise<Order> {
    return this.orderService.createOrder(order);
  }
}
