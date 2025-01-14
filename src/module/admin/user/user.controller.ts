import { Controller, Get, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import User from 'src/entities/user.entity';
import AdminGuard from 'src/auth/guard/admin.guard';

@Controller('/manage/users/')
@UseGuards(AdminGuard)
@ApiBearerAuth()
// @Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsersByAdmin() {
    return await this.userService.getUsersByAdmin();
  }

  @Get(':id')
  async getUserByAdmin(email: string) {
    return await this.userService.getUserByAdmin(email);
  }

  @Put(':id')
  async updateUserByAdmin(id: number, data: User) {
    return await this.userService.updateUserByAdmin(id, data);
  }
}
