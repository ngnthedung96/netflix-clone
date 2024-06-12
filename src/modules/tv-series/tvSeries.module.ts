import { Module } from '@nestjs/common';
import { TVSeriesController } from './tvSeries.controller';
import { TVSeriesService } from './tvSeries.service';

@Module({
  imports: [],
  controllers: [TVSeriesController],
  providers: [TVSeriesService],
})
export class TVSeriesModule {}
