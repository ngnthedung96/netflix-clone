import { MovieType } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  validate,
  IsOptional,
} from 'class-validator';

// define type
export class getWatchListDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty()
  page: number;

  @IsNotEmpty()
  limit: number;
}

export class addWatchListDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty({ message: 'Movie id must not be empty' })
  movieId: number;

  @IsNotEmpty({ message: 'Media type must not be empty' })
  mediaType: MovieType;

  @IsOptional()
  description: string;
}
