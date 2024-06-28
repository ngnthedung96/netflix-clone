export enum MOVIE_TYPE {
  TV_SERIES = 'tv',
  MOVIES = 'movie',
}

export enum MEDIA_TYPE {
  TV_SERIES = 'tv',
  MOVIES = 'movie',
  PERSON = 'person',
}

export const PREMIUM_POPULARITY = 1000;

export interface IListResponse {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MEDIA_TYPE;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieResponse {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MEDIA_TYPE;
  adult: boolean;
  title: string;
  original_language: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IPersonResponse {
  id: number;
  name: MEDIA_TYPE;
  original_name: MEDIA_TYPE;
  media_type: MEDIA_TYPE;
  adult: false;
  popularity: number;
  gender: number;
  known_for_department: MEDIA_TYPE;
  profile_path: string;
  known_for: IMovieResponse[];
}

export type ISearchResponse = (IMovieResponse | IPersonResponse)[];
