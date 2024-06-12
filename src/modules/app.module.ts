import { Module } from '@nestjs/common';
import {
  ConfigModule,
  AuthModule,
  UserModule,
  SearchModule,
  PrismaModule,
  WatchListModule,
  FavoriteListModule,
  TVSeriesModule,
} from './index';
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
