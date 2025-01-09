import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [DatabaseModule, ProductModule],
})
export class AppModule {}
