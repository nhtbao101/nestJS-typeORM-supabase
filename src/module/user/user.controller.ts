import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import User from '../../entities/user.entity';
import UserGuard from '../../auth/guard/user.guard';

@Controller('/users/')
@ApiBearerAuth()
@UseGuards(UserGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async getUser(@Param() id: number) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  async updateUser(@Body() data: User) {
    return this.userService.updateUser(data);
  }
}
