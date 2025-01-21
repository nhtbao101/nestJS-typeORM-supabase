import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AdminService } from './admin.service';
import Admin from 'src/entities/admin.entity';
import AdminGuard from 'src/auth/guard/admin.guard';
import { Roles } from 'src/auth/decorator/role';
import { Role } from 'src/constants/role';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { SignUpAdminDto } from 'src/auth/dto/signup.dto';

@Controller('/admin/')
@UseGuards(AdminGuard, RolesGuard)
@ApiBearerAuth()
@Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAdmins(): Promise<Admin[]> {
    const adminList = await this.adminService.getAdmins();
    return adminList.map((admin: Admin) => new Admin(admin));
  }

  @Get(':id')
  async getAdminById(@Param('id') id: number) {
    return new Admin(await this.adminService.getAdminById(id));
  }

  @Put(':id')
  async updateAdmin(@Param('id') id: number, @Body() data: SignUpAdminDto) {
    return await this.adminService.updateAdmin(id, data);
  }
}
