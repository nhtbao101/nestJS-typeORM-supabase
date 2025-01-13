import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from '../auth.service';
import { SignInDto } from '../dto/signin.dto';

@Injectable()
export class AdminStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(req: SignInDto) {
    const user = await this.authService.signInAdmin(req);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
