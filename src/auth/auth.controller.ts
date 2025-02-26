import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpAdminDto, SignUpUserDto } from './dto/signup.dto';
import Admin from '../entities/admin.entity';

@Controller('/auth/')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signup/user')
  async signUpUser(@Body() req: SignUpUserDto) {
    return this.authService.signUpUser(req);
  }

  @Post('signin/user')
  async signInUser(@Body() req: SignInDto) {
    return this.authService.signInUser(req);
  }

  @Post('signup/admin')
  async signUpAdmin(@Body() req: SignUpAdminDto): Promise<Admin> {
    return this.authService.signUpAdmin(req);
  }

  @Post('signin/admin')
  async signInAdmin(@Body() req: SignInDto) {
    return this.authService.signInAdmin(req);
  }
}
