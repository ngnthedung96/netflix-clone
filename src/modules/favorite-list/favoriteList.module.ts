import { Module } from '@nestjs/common';
import { FavoriteListController } from './favoriteList.controller';
import { FavoriteListService } from './favoriteList.service';

@Module({
  imports: [],
  controllers: [FavoriteListController],
  providers: [FavoriteListService],
})
export class FavoriteListModule {}
