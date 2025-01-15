import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ProductModule } from './module/product/product.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './module/admin/admin.module';
import { UserModule } from './module/user/user.module';
import { CategoryModule } from './module/category/category.module';
import { OrderModule } from './module/order/order.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    SharedModule,
    ProductModule,
    AdminModule,
    UserModule,
    CategoryModule,
    OrderModule,
  ],
})
export class AppModule {}
