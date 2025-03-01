import { Injectable } from '@nestjs/common';

import { OrderDto } from '../../../module/dto/order.dto';
import OrderRepository from '../../../repository/order.repository';

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
