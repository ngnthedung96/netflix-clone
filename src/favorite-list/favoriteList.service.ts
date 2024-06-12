import { BadRequestException, Injectable } from '@nestjs/common';
import { addFavoriteListDTO, getFavoriteListDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable({})
export class FavoriteListService {
  constructor(private prismaService: PrismaService) {}

  async add(body: addFavoriteListDTO) {
    try {
      const newMovie = await this.prismaService.favoriteList.create({
        data: body,
      });
      return newMovie;
    } catch (e) {
      throw new BadRequestException(
        'Failed to add a movie to the favorite list',
      );
    }
  }

  async get(query: getFavoriteListDTO) {
    const { page, limit, userId } = query;
    const skip = limit * (page - 1);
    try {
      const newMovie = await this.prismaService.favoriteList.findMany({
        skip,
        take: limit,
        where: {
          userId,
        },
      });
      return newMovie;
    } catch (e) {
      throw new BadRequestException(
        'Failed to get movies from the favorite list',
      );
    }
  }
}
