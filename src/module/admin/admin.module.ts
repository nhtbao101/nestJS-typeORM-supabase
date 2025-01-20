import { Module } from '@nestjs/common';

import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { UserModule } from './user/user.module';
import { AdminRepository } from 'src/auth/repository/admin.repository';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, OrderModule, CategoryModule, ProductModule],
  controllers: [AdminController],
  providers: [AdminService, AdminRepository],
  exports: [AdminService],
})
export class AdminModule {}
