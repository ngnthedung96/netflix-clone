import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export class JWTLib {
  private jwtService: JwtService;
  private configService: ConfigService;
  constructor() {
    this.jwtService = new JwtService();
    this.configService = new ConfigService();
  }

  async signJwtToken(userId: number, email: string) {
    const payload = {
      id: userId,
      email,
    };
    return this.jwtService.signAsync(payload, {
      expiresIn: '10m',
      secret: this.configService.get('JWT_SECRET'),
    });
  }
}
