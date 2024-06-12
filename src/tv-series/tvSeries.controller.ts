import { Controller, Post, Req, Body, Get, Query, Param } from '@nestjs/common';
import { TVSeriesService } from './tvSeries.service';
import { getListDTO } from './dto';

@Controller('tv-series')
export class TVSeriesController {
  constructor(private tvSeriesService: TVSeriesService) {}
  @Get('/get-list')
  async getList(@Query() query: getListDTO) {
    return await this.tvSeriesService.discoverTv(query);
  }
  @Get('/get-detail/:id')
  async getDetail(@Param() param: { id: string }) {
    const { id } = param;
    return await this.tvSeriesService.getDetail(id);
  }
}
