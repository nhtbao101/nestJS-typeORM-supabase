import { Injectable } from '@nestjs/common';

import OrderRepository from './order.repository';
import { OrderDto } from '../dto/order.dto';
import { Order } from 'src/entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async getOrdersByUser() {
    return this.orderRepository.find();
  }

  async getOrderById(id: number) {
    return this.orderRepository.findOneBy({
      id: id,
    });
  }

  async createOrder(req: OrderDto) {
    const order = this.orderRepository.create(req);
    return await this.orderRepository.save(order);
  }

  async updateOrder(req: Order) {
    return await this.orderRepository.update({ id: req.id }, req);
  }
}
