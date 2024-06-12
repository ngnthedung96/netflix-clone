import { BadRequestException, Injectable } from '@nestjs/common';
import { addWatchListDTO, getWatchListDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable({})
export class WatchListService {
  constructor(private prismaService: PrismaService) {}

  async add(body: addWatchListDTO) {
    try {
      const newMovie = await this.prismaService.watchList.create({
        data: body,
      });
      return newMovie;
    } catch (e) {
      throw new BadRequestException('Failed to add a movie to the watch list');
    }
  }

  async get(query: getWatchListDTO) {
    const { page, limit, userId } = query;
    const skip = limit * (page - 1);
    try {
      const newMovie = await this.prismaService.watchList.findMany({
        skip,
        take: limit,
        where: {
          userId,
        },
      });
      return newMovie;
    } catch (e) {
      throw new BadRequestException('Failed to get movies from the watch list');
    }
  }
}
