import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AdminStrategy } from './strategy/admin.strategy';
import { UserStrategy } from './strategy/user.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AdminStrategy, UserStrategy],
  exports: [AuthService],
})
export class AuthModule {}
