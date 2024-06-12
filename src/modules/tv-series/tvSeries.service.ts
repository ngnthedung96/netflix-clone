import { BadRequestException, Injectable } from '@nestjs/common';
import { getListDTO } from './dto';
import { TheMovieDBLib } from 'src/libs';
import { MOVIE_TYPE } from 'src/constant';
@Injectable({})
// Chỗ nào cần thì sẽ inject được
export class TVSeriesService {
  private theMovieDbInstance: TheMovieDBLib;
  constructor() {
    this.theMovieDbInstance = new TheMovieDBLib();
  }
  async discoverTv(query: getListDTO) {
    try {
      return await this.theMovieDbInstance.discover(
        MOVIE_TYPE.TV_SERIES,
        query,
      );
    } catch (e) {
      throw new BadRequestException('Failed to find list TV Series');
    }
  }
  async getDetail(param: string) {
    try {
      return await this.theMovieDbInstance.getDetailTv(param);
    } catch (e) {
      throw new BadRequestException('Failed to get detail this TV Series');
    }
  }
}
