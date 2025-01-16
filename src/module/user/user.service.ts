import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/auth/repository/user.repository';

import User from 'src/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async getUserById(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({
      id: id,
    });
    return user;
    // return plainToInstance(UserEntity, user);
  }

  async updateUser(data: User) {
    return this.userRepository.update(
      {
        id: data.id,
      },
      data,
    );
  }
}
