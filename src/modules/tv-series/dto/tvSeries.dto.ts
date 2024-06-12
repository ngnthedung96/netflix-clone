import {
  IsEmail,
  IsNotEmpty,
  IsString,
  validate,
  IsOptional,
} from 'class-validator';

// define type
export class getListDTO {
  [key: string]: string | number;

  @IsNotEmpty({ message: 'Page must not be empty' })
  page: number;
}

export class addWatchListDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty({ message: 'Movie id must not be empty' })
  movieId: number;

  @IsOptional()
  description: string;
}
