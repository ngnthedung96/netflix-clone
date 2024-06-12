import { Module } from '@nestjs/common';
import { WatchListController } from './watchList.controller';
import { WatchListService } from './watchList.service';

@Module({
  imports: [],
  controllers: [WatchListController],
  providers: [WatchListService],
})
export class WatchListModule {}
