import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { Order } from '../entities/order.entity';

@Injectable()
export default class OrderRepository extends Repository<Order> {
  constructor(private dataSource: DataSource) {
    super(Order, dataSource.createEntityManager());
  }
}
