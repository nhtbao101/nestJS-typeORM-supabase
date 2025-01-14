import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

import { SignInDto } from '../dto/signin.dto';
import { ExtractJwt } from 'passport-jwt';
import { UserService } from 'src/module/user/user.service';

@Injectable()
export class UserStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(req: SignInDto) {
    const user = await this.userService.getUserByEmail(req.email);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
