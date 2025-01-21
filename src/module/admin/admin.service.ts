import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { SignUpAdminDto } from 'src/auth/dto/signup.dto';

import { AdminRepository } from 'src/auth/repository/admin.repository';
import { ErrorMsg } from 'src/constants/error-message';

@Injectable()
export class AdminService {
  constructor(private adminRepository: AdminRepository) {}

  async getAdmins() {
    return await this.adminRepository.find();
  }

  async getAdminById(id: number) {
    const admin = await this.adminRepository.findOneBy({
      id: id,
    });
    if (!admin) {
      throw new HttpException(ErrorMsg.ACCOUNT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return admin;
  }

  async updateAdmin(id: number, data: SignUpAdminDto) {
    const findAdminById = await this.getAdminById(id);
    if (findAdminById.email !== data.email) {
      throw new HttpException(
        ErrorMsg.CANNOT_UPDATE_EMAIL,
        HttpStatus.BAD_REQUEST,
      );
    }
    const result = await this.adminRepository.update(id, data);
    return result.affected > 0;
  }
}
