import { Controller, Post, Req, Body, Query, Get } from '@nestjs/common';
import { FavoriteListService } from './favoriteList.service';
import { addFavoriteListDTO, getFavoriteListDTO } from './dto';

@Controller('favorite-list')
export class FavoriteListController {
  // auth service is automatically created when initializing the controller
  constructor(private watchListService: FavoriteListService) {}
  @Post('/add') // register a new user
  async add(
    // @Req() req:Request
    @Body() body: addFavoriteListDTO,
  ) {
    return await this.watchListService.add(body);
  }
  @Get('/get') // login
  async get(@Query() query: getFavoriteListDTO) {
    return await this.watchListService.get(query);
  }
}
