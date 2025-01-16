import { Injectable } from '@nestjs/common';

import OrderRepository from 'src/repository/order.repository';
import { OrderDto } from '../dto/order.dto';

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
}
