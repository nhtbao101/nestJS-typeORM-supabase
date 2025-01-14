import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserRepository } from './repository/user.repository';
import { AdminRepository } from './repository/admin.repository';
import { SignUpAdminDto, SignUpUserDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

import { ERROR_MESSAGE } from 'src/constants/error-message';
import { JwtService } from '@nestjs/jwt';
import Admin from 'src/entities/admin.entity';
import User from 'src/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private adminRepository: AdminRepository,
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUpUser(req: SignUpUserDto) {
    const checkUserExist = await this.userRepository.findOneBy({
      email: req.email,
    });
    if (checkUserExist) {
      throw new HttpException(
        ERROR_MESSAGE.EMAIL_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = this.userRepository.create(req);

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.password, salt);
    const result = await this.userRepository.save({
      ...user,
      password: hashPassword,
    });

    return new User(result);
  }

  async signInUser(req: SignInDto) {
    const user = await this.userRepository.findOneBy({
      email: req.email,
    });

    if (!user) {
      throw new NotFoundException(ERROR_MESSAGE.ACCOUNT_NOT_FOUND);
    }

    return {
      user: new User(user),
      token: await this.jwtService.signAsync({
        id: user.id,
        email: user.email,
        userRole: user.userRole,
      }),
    };
  }

  async signUpAdmin(req: SignUpAdminDto): Promise<Admin> {
    const checkAdminExist = await this.adminRepository.findOneBy({
      email: req.email,
    });

    if (checkAdminExist) {
      throw new HttpException(
        ERROR_MESSAGE.EMAIL_EXIST,
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(req.password, salt);
    const result = await this.adminRepository.save({
      ...req,
      password: hashPassword,
    });

    return new Admin(result);
  }

  async signInAdmin(req: SignInDto): Promise<{ admin: Admin; token: string }> {
    const admin = await this.adminRepository.findOneBy({
      email: req.email,
    });

    if (!admin) {
      throw new NotFoundException(ERROR_MESSAGE.ACCOUNT_NOT_FOUND);
    }
    const isMatchPassword = await bcrypt.compare(req.password, admin.password);

    if (!isMatchPassword) {
      throw new HttpException(
        ERROR_MESSAGE.ACCOUNT_NOT_FOUND,
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      admin: new Admin(admin),
      token: await this.jwtService.signAsync({
        id: admin.id,
        email: admin.email,
        roleId: admin.roleId,
      }),
    };
  }
}
