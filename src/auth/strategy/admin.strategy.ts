import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { SignInDto } from '../dto/signin.dto';
import { AdminRepository } from '../repository/admin.repository';

import Admin from '../../entities/admin.entity';
import { ErrorMsg } from '../../constants/error-message';

@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(private adminRepository: AdminRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(req: SignInDto): Promise<Admin> {
    if (!req.email) {
      throw new BadRequestException('Invalid payload: Missing email');
    }
    const admin = await this.adminRepository.findOneBy({
      email: req.email,
    });

    if (!admin) {
      throw new BadRequestException(ErrorMsg.EMAIL_PASSWORD_NOT_FOUND);
    }
    return admin;
  }
}
