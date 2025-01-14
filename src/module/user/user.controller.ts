import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import User from 'src/entities/user.entity';
import UserGuard from 'src/auth/guard/user.guard';

@Controller('/users/')
@ApiBearerAuth()
@UseGuards(UserGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUser(@Param() id: number) {
    return this.userService.getUserById(id);
  }

  // @Put(':id')
  // async updateUser(data) {
  //   return this.userService.updateUser(data);
  // }
}
