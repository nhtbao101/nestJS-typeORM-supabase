import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './repository/user.repository';
import { AdminRepository } from './repository/admin.repository';
import { AdminStrategy } from './strategy/admin.strategy';
import { UserStrategy } from './strategy/user.strategy';
import { AdminModule } from 'src/module/admin/admin.module';
import { UserModule } from 'src/module/user/user.module';

@Module({
  imports: [PassportModule, AdminModule, UserModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    AdminRepository,
    AdminStrategy,
    UserStrategy,
  ],
  exports: [AuthService],
})
export class AuthModule {}
