import { IsNotEmpty, IsOptional } from 'class-validator';

// define type
export class getRequestListDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty({ message: 'Page must not be empty' })
  page: number;

  @IsNotEmpty({ message: 'Limit must not be empty' })
  limit: number;
}

export class getDetailDTO {
  @IsNotEmpty({ message: 'Request id must not be empty' })
  requestId: number;
}

export class addRequestDTO {
  @IsNotEmpty({ message: 'User id must not be empty' })
  userId: number;

  @IsNotEmpty({ message: 'Image must not be empty' })
  imgUrl: string;

  @IsOptional()
  description: string;
}
