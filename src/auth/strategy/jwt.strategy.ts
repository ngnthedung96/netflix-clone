import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IPayloadValidate } from 'src/interface/auth';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    public prismaService: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET'),
    });
    this.prismaService = prismaService;
  }
  async validate(payload: IPayloadValidate) {
    try {
      const { id } = payload;
      const user = await this.prismaService.user.findUniqueOrThrow({
        where: {
          id,
        },
      });
      return { ...user, hashedPassword: undefined };
    } catch (e) {
      throw new UnauthorizedException('Unauthorized');
    }
  }
}
