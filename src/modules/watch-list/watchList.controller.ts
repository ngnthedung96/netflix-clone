import { Controller, Post, Req, Body, Query, Get } from '@nestjs/common';
import { WatchListService } from './watchList.service';
import { addWatchListDTO, getWatchListDTO } from './dto';

@Controller('watch-list')
export class WatchListController {
  // auth service is automatically created when initializing the controller
  constructor(private watchListService: WatchListService) {}
  @Post('/add') // register a new user
  async add(
    // @Req() req:Request
    @Body() body: addWatchListDTO,
  ) {
    return await this.watchListService.add(body);
  }
  @Get('/get') // login
  async get(@Query() query: getWatchListDTO) {
    return await this.watchListService.get(query);
  }
}
