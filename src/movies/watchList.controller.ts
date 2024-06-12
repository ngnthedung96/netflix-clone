import { Controller, Post, Req, Body } from '@nestjs/common';
import { WatchListService } from './watchList.service';

@Controller('auth')
export class WatchListController {
  // auth service is automatically created when initializing the controller
  constructor(private watchListService: WatchListService) {}
}
