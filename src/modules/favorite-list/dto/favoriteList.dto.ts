import { IsNotEmpty, IsOptional } from 'class-validator';
import { MovieType } from '@prisma/client';

// define type
export class getFavoriteListDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}

export class addFavoriteListDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty({ message: 'Movie id must not be empty' })
  movieId: number;

  @IsNotEmpty({ message: 'Media type must not be empty' })
  mediaType: MovieType;

  @IsOptional()
  description: string;
}
