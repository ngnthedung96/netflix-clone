import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { MOVIE_TYPE } from 'src/constant';
import { normalizeSearchListRes } from 'src/helpers';
import { getListDTO } from 'src/modules/tv-series/dto';
export class TheMovieDBLib {
  private configService: ConfigService;
  constructor() {
    this.configService = new ConfigService();
  }
  //--------------- search------------------
  async searchMulti(param?: { [key: string]: number | string }) {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi',
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: this.configService.get('API_KEY'),
          ...param,
        },
      };

      const response = await axios.request(options);
      const responseData = response.data;
      const normalize = normalizeSearchListRes(responseData.results);
      if (!normalize) return false;
      return { ...response.data, results: normalize };
    } catch (e) {
      throw e;
    }
  }

  async searchPerson(param?: { [key: string]: number | string }) {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/person',
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: this.configService.get('API_KEY'),
          ...param,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  //---------------- discover---------------------
  async discover(type: MOVIE_TYPE, param: getListDTO) {
    try {
      let url = '';
      switch (type) {
        case MOVIE_TYPE.MOVIES:
          url = 'https://api.themoviedb.org/3/discover/movie';
          break;

        case MOVIE_TYPE.TV_SERIES:
        default:
          url = 'https://api.themoviedb.org/3/discover/tv';
          break;
      }
      const options = {
        method: 'GET',
        url,
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: this.configService.get('API_KEY'),
          ...param,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  // ----------------tv series-----------------------
  async getDetailTv(param: string) {
    try {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/tv/${param}`,
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: this.configService.get('API_KEY'),
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
