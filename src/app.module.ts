import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';
import { WatchListModule } from './watch-list/watchList.module';
import { FavoriteListModule } from './favorite-list/favoriteList.module';
import { TVSeriesModule } from './tv-series/tvSeries.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    SearchModule,
    PrismaModule,
    WatchListModule,
    FavoriteListModule,
    TVSeriesModule,
  ],
})
export class AppModule {}
