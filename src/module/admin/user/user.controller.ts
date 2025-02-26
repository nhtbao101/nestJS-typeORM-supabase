import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UserService } from './user.service';
import AdminGuard from '../../../auth/guard/admin.guard';
import { UpdateUserDto } from '../../../auth/dto/signup.dto';

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
  async getUserByAdmin(@Param('id') id: number) {
    return await this.userService.getUserByAdmin(id);
  }

  @Put(':id')
  async updateUserByAdmin(
    @Param('id') id: number,
    @Body() data: UpdateUserDto,
  ) {
    return await this.userService.updateUserByAdmin(id, data);
  }

  @Delete(':id')
  async deleteUserByAdmin(@Param('id') id: number) {
    return await this.userService.deleteUserByAdmin(id);
  }
}
