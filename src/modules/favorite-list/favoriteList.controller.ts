import {
  Controller,
  Post,
  Req,
  Body,
  Query,
  Get,
  UseGuards,
} from '@nestjs/common';
import { FavoriteListService } from './favoriteList.service';
import { addFavoriteListDTO, getFavoriteListDTO } from './dto';
import { Role } from 'src/decorator/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/guard/roles.guard';
import { UserRole } from '@prisma/client';

@Controller('favorite-list')
export class FavoriteListController {
  constructor(private watchListService: FavoriteListService) {}

  @Role([UserRole.ADMIN, UserRole.USER]) // Specify the roles required to access this endpoint
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Post('/add')
  async add(@Body() body: addFavoriteListDTO) {
    return await this.watchListService.add(body);
  }

  @Role([UserRole.ADMIN, UserRole.USER]) // Specify the roles required to access this endpoint
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('/get')
  async get(@Query() query: getFavoriteListDTO) {
    return await this.watchListService.get(query);
  }
}
