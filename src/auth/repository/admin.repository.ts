import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import Admin from 'src/entities/admin.entity';

@Injectable()
export class AdminRepository extends Repository<Admin> {
  constructor(public dataSource: DataSource) {
    super(Admin, dataSource.createEntityManager());
  }
}
