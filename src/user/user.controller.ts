import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserRole } from '@prisma/client';
import { Request } from 'express';
import { Role } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/guard/roles.guard';

@Controller('users')
export class UserController {
  @Role([UserRole.ADMIN, UserRole.USER]) // Specify the roles required to access this endpoint
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/me')
  me(@Req() req: Request) {
    return req.user;
  }
}
