import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Req,
} from '@nestjs/common';
import * as argon from 'argon2';
import { AuthDTO } from './dto';
import { JWTLib } from 'src/libs';
import { PrismaService } from '../prisma/prisma.service';
@Injectable({})
export class AuthService {
  jwtLib: JWTLib;
  constructor(private prismaService: PrismaService) {
    this.jwtLib = new JWTLib();
  }
  async register(body: AuthDTO) {
    const email = body.email;
    const hashedPassword = await argon.hash(body.password);
    try {
      const user = await this.prismaService.user.create({
        data: {
          email,
          hashedPassword,
          firstName: '',
          lastName: '',
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
        },
      });
      return user;
    } catch (e) {
      throw new BadRequestException('Failed to register');
    }
  }
  async login(body: AuthDTO) {
    try {
      const user = await this.prismaService.user.findUniqueOrThrow({
        where: {
          email: body.email,
        },
      });
      const passwordMatched = await argon.verify(
        user.hashedPassword,
        body.password,
      );
      if (!passwordMatched) {
        throw new ForbiddenException('Incorrect password');
      }
      return {
        ...user,
        hashedPassword: undefined,
        token: await this.jwtLib.signJwtToken(user.id, user.email),
      };
    } catch (e) {
      throw new BadRequestException('Failed to login');
    }
  }
}
