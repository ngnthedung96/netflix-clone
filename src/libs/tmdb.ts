import axios from 'axios';
import { MOVIE_TYPE } from 'src/constant';
import { getListDTO } from 'src/modules/tv-series/dto';
const apiKey = process.env.API_KEY;
export class TheMovieDBLib {
  constructor() {}
  //--------------- search------------------
  async searchMulti(param?: { [key: string]: number | string }) {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US',
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: apiKey,
          ...param,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
  async searchPerson(param?: { [key: string]: number | string }) {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US',
        headers: {
          accept: 'application/json',
        },
        params: {
          api_key: apiKey,
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
          api_key: apiKey,
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
          api_key: apiKey,
        },
      };

      const response = await axios.request(options);
      return response.data;
    } catch (e) {
      throw e;
    }
  }
}
