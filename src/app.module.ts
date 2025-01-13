import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ProductModule } from './module/product/product.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [DatabaseModule, SharedModule, AuthModule, ProductModule],
})
export class AppModule {}
