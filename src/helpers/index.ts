import {
  IListResponse,
  IMovieResponse,
  IPersonResponse,
  ISearchResponse,
  MEDIA_TYPE,
  PREMIUM_POPULARITY,
} from 'src/constant';

export const normalizeSearchListRes = (list: ISearchResponse[]) => {
  const normalizeList = list.map((res) => {
    const { media_type } = castTo<IMovieResponse | IPersonResponse>(res);
    switch (media_type) {
      case MEDIA_TYPE.MOVIES:
      case MEDIA_TYPE.TV_SERIES:
        return normalizeMovieDetailRes(castTo<IMovieResponse>(res));
      case MEDIA_TYPE.PERSON:
        return normalLizePersonRes(castTo<IPersonResponse>(res));
    }
  });
  return normalizeList;
};

const normalLizePersonRes = (person: IPersonResponse) => {
  const {
    id,
    name,
    original_name: originalName,
    media_type: mediaType,
    adult,
    popularity,
    gender,
    known_for_department: knownForDepartment,
    profile_path: profilePath,
    known_for: knownFor,
  } = person;
  return {
    id,
    name,
    adult,
    popularity,
    gender,
    originalName,
    mediaType,
    knownForDepartment,
    profilePath,
    knownFor: knownFor.map((movie) => normalizeMovieDetailRes(movie)),
  };
};

export const normalizeMovieDetailRes = (movie: IListResponse) => {
  if (!movie) {
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
  } = movie;
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

export const castTo = <T>(obj: unknown): T => {
  return obj as T;
};
