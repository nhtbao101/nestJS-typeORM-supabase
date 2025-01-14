import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ProductModule } from './module/product/product.module';
import { ConfigModule } from './shared/shared.module';
import { AdminModule } from './module/admin/admin.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    AuthModule,
    ProductModule,
    AdminModule,
    UserModule,
  ],
})
export class AppModule {}
