import {
  Controller,
  Post,
  Req,
  Body,
  Query,
  Get,
  UseGuards,
} from '@nestjs/common';
import { RequestService } from './request.service';
import { getDetailDTO, getRequestListDTO, addRequestDTO } from './dto';
import { Role } from 'src/decorator/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guard/roles.guard';
import { UserRole } from '@prisma/client';

@Controller('request')
export class RequestController {
  constructor(private requestService: RequestService) {}

  @Role([UserRole.ADMIN, UserRole.USER]) // Specify the roles required to access this endpoint
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/add')
  async add(@Body() body: addRequestDTO) {
    return await this.requestService.add(body);
  }

  @Role([UserRole.ADMIN, UserRole.USER]) // Specify the roles required to access this endpoint
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/get')
  async get(@Query() query: getRequestListDTO) {
    return await this.requestService.get(query);
  }
}
