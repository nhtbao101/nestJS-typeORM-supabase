import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { SignInDto } from '../dto/signin.dto';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  async validate(req: SignInDto) {
    const user = await this.userRepository.findOneBy({
      email: req.email,
    });

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
