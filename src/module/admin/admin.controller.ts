import { Body, Controller, Get, Put, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AdminService } from './admin.service';
import Admin from 'src/entities/admin.entity';
import { SignUpAdminDto } from 'src/auth/dto/signup.dto';
import AdminGuard from 'src/auth/guard/admin.guard';

@Controller('/admin/')
@UseGuards(AdminGuard)
@ApiBearerAuth()
// @Roles(Role.SUPER_ADMIN, Role.ADMIN)
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  async getAdmins(): Promise<Admin[]> {
    console.log('get admins');
    const adminList = await this.adminService.getAdmins();
    return adminList.map((admin: Admin) => new Admin(admin));
  }

  @Get(':id')
  async getAdminById(@Req() req) {
    return new Admin(await this.adminService.getAdminById(req.id));
  }

  @Get()
  async getAdminByEmail(@Body() req) {
    return new Admin(await this.adminService.getAdminByEmail(req.user.email));
  }

  @Put(':id')
  async updateAdmin(id: number, data: SignUpAdminDto) {
    return await this.adminService.updateAdmin(id, data);
  }
}
