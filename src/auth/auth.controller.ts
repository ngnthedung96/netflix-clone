import { Controller, Post, Req, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  // auth service is automatically created when initializing the controller
  constructor(private authService: AuthService) {}
  // some request from client
  @Post('/register') // register a new user
  async register(
    // @Req() req:Request
    @Body() body: AuthDTO,
  ) {
    return await this.authService.register(body);
  }
  @Post('/login') // login
  async login(@Body() body: AuthDTO) {
    return await this.authService.login(body);
  }
}
