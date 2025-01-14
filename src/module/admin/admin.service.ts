import { Injectable } from '@nestjs/common';

import { SignUpAdminDto } from 'src/auth/dto/signup.dto';
import { AdminRepository } from 'src/auth/repository/admin.repository';

@Injectable()
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  async getAdmins() {
    console.log('get admins service');
    return await this.adminRepository.find();
  }

  async getAdminById(id: number) {
    return await this.adminRepository.findOneBy({
      id: id,
    });
  }

  async getAdminByEmail(email: string) {
    console.log('get user by email', email);
    return await this.adminRepository.findOneBy({
      email: email,
    });
  }
  async updateAdmin(id: number, data: SignUpAdminDto) {
    return await this.adminRepository.update(id, data);
  }
}
