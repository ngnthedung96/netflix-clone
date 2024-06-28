import { IListResponse, PREMIUM_POPULARITY } from 'src/constant';

export const normalizeMovieListRes = (list: IListResponse[]) => {
  if (!list) {
    return false;
  }
  const normalizeList = list.map((res) => {
    const {
      backdrop_path: backdropPath,
      id,
      original_title: originalTitle,
      overview,
      poster_path: posterPath,
      media_type: mediaType,
      adult,
      title,
      original_language: originalLanguage,
      genre_ids: genreIds,
      popularity,
      release_date: releaseDate,
      video,
      vote_average: voteAverage,
      vote_count: voteCount,
    } = res;
    return {
      backdropPath,
      id,
      originalTitle,
      overview,
      posterPath,
      mediaType,
      adult,
      title,
      originalLanguage,
      genreIds,
      popularity,
      releaseDate,
      video,
      voteAverage,
      voteCount,
      requirePremium: popularity >= PREMIUM_POPULARITY,
    };
  });
  return normalizeList;
};

export const normalizeMovieDetailRes = (list: IListResponse) => {
  if (!list) {
    return false;
  }
  const {
    backdrop_path: backdropPath,
    id,
    original_title: originalTitle,
    overview,
    poster_path: posterPath,
    media_type: mediaType,
    adult,
    title,
    original_language: originalLanguage,
    genre_ids: genreIds,
    popularity,
    release_date: releaseDate,
    video,
    vote_average: voteAverage,
    vote_count: voteCount,
  } = list;
  return {
    backdropPath,
    id,
    originalTitle,
    overview,
    posterPath,
    mediaType,
    adult,
    title,
    originalLanguage,
    genreIds,
    popularity,
    releaseDate,
    video,
    voteAverage,
    voteCount,
    requirePremium: popularity >= PREMIUM_POPULARITY,
  };
};
