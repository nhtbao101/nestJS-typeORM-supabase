import { Injectable } from '@nestjs/common';

import { AdminRepository } from 'src/auth/repository/admin.repository';
import Admin from 'src/entities/admin.entity';

@Injectable()
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  async getAdmins() {
    return await this.adminRepository.find();
  }

  async getAdminById(id: number) {
    return await this.adminRepository.findOneBy({
      id: id,
    });
  }

  async getAdminByEmail(email: string) {
    return await this.adminRepository.findOneBy({
      email: email,
    });
  }
  async updateAdmin(data: Admin) {
    return await this.adminRepository.update({ id: data.id }, data);
  }
}
