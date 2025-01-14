import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';

import { SignInDto } from '../dto/signin.dto';
import { AdminService } from 'src/module/admin/admin.service';
import Admin from 'src/entities/admin.entity';

@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(private adminService: AdminService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(req: SignInDto): Promise<Admin> {
    console.log('payload');
    if (!req.email) {
      throw new UnauthorizedException('Invalid payload: Missing email');
    }
    const admin = await this.adminService.getAdminByEmail(req.email);

    if (!admin) {
      console.log('no admin');
      throw new UnauthorizedException();
    }
    return admin;
  }
}
