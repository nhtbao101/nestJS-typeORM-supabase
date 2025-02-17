import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import OrderRepository from 'src/repository/order.repository';
import { OrderDto } from '../dto/order.dto';
import ProductRepository from 'src/repository/product.repository';
import { UserRepository } from 'src/auth/repository/user.repository';
import { ErrorMsg } from 'src/constants/error-message';

@Injectable()
export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private productRepository: ProductRepository,
    private userRepository: UserRepository,
  ) {}

  async getOrdersByUser() {
    return this.orderRepository.find();
  }

  async getOrderById(id: number) {
    return this.orderRepository.findOneBy({
      id: id,
    });
  }

  async createOrder(req: OrderDto) {
    const isValidUser = await this.userRepository.findOneBy({
      id: req.customerId,
    });

    if (!isValidUser) {
      throw new HttpException(ErrorMsg.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    const order = this.orderRepository.create(req);

    const productList = await Promise.all(
      req.orderItems.map(async (element, index: number) => {
        const product = await this.productRepository.findOneBy({
          id: element.productId,
        });

        if (!product) {
          throw new HttpException(
            `${ErrorMsg.PRODUCT_NOT_FOUND} at orderItems[${index}]`,
            HttpStatus.NOT_FOUND,
          );
        }

        return product;
      }),
    );
    const totalPrice = productList.reduce(
      (initialize, current) => initialize + current.quantity * current.price,
      0,
    );

    return await this.orderRepository.save({
      ...order,
      total: totalPrice,
    });
  }
}
