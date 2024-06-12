import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  Req,
} from '@nestjs/common';
import { TheMovieDBLib } from 'src/libs';
@Injectable({})
export class SearchService {
  private theMovieDbInstance: TheMovieDBLib;
  constructor() {
    this.theMovieDbInstance = new TheMovieDBLib();
  }
  async searchMultple(query?: { [key: string]: number | string }) {
    try {
      return await this.theMovieDbInstance.searchMulti(query);
    } catch (e) {
      throw new BadRequestException('Failed to search');
    }
  }
  async searchPerson(query?: { [key: string]: number | string }) {
    try {
      return await this.theMovieDbInstance.searchPerson(query);
    } catch (e) {
      throw new BadRequestException('Failed to search');
    }
  }
}
