import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminRepository } from 'src/auth/repository/admin.repository';
import { UserRepository } from 'src/auth/repository/user.repository';
import Admin from 'src/entities/admin.entity';

@Global()
@Module({
  imports: [
    /** Export Repositories */
    TypeOrmModule.forFeature([Admin]),

    PassportModule,
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '999d' },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [UserRepository, AdminRepository],
  exports: [TypeOrmModule, JwtModule, UserRepository, AdminRepository],
})
export class SharedModule {}
