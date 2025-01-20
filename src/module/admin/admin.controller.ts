import { Body, Controller, Get, Param, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AdminService } from './admin.service';
import Admin from 'src/entities/admin.entity';
import AdminGuard from 'src/auth/guard/admin.guard';
import { Roles } from 'src/auth/decorator/role';
import { Role } from 'src/constants/role';
import { RolesGuard } from 'src/auth/guard/role.guard';

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
  async getAdminById(@Param() param: { id: number }) {
    return new Admin(await this.adminService.getAdminById(param.id));
  }

  @Get()
  async getAdminByEmail(@Body() req) {
    return new Admin(await this.adminService.getAdminByEmail(req.user.email));
  }

  @Put(':id')
  async updateAdmin(data: Admin) {
    return await this.adminService.updateAdmin(data);
  }
}
