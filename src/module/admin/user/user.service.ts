import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpUserDto } from 'src/auth/dto/signup.dto';
import { UserRepository } from 'src/auth/repository/user.repository';
import { ERROR_MESSAGE } from 'src/constants/error-message';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUsersByAdmin() {
    return await this.userRepository.find();
  }

  async getUserByAdmin(email: string) {
    return await this.userRepository.findOneBy({
      email: email,
    });
  }

  async updateUserByAdmin(id: number, data: SignUpUserDto) {
    return await this.userRepository.update(id, data);
  }

  async deleteUserByAdmin(id: number) {
    const user = this.userRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new HttpException(
        ERROR_MESSAGE.USER_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
