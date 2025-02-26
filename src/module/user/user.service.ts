import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../../auth/repository/user.repository';
import { ErrorMsg } from '../../constants/error-message';

import User from '../../entities/user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({
      id: id,
    });
    if (!user) {
      throw new HttpException(ErrorMsg.USER_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async updateUser(data: User) {
    await this.getUserById(data.id);
    return this.userRepository.update(
      {
        id: data.id,
      },
      data,
    );
  }
}
