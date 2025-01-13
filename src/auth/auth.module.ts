import { Module } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserRepository } from './repository/user.repository';
import { AdminRepository } from './repository/admin.repository';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository, AdminRepository],
  exports: [AuthService],
})
export class AuthModule {}
