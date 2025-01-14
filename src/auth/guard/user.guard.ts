import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export default class UserGuard extends AuthGuard('user-jwt') {}
