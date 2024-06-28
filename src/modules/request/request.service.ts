import { BadRequestException, Injectable } from '@nestjs/common';
import { addRequestDTO, getRequestListDTO } from './dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable({})
export class RequestService {
  constructor(private prismaService: PrismaService) {}

  async add(body: addRequestDTO) {
    try {
      const newRequest = await this.prismaService.request.create({
        data: body,
      });
      return newRequest;
    } catch (e) {
      throw new BadRequestException('Failed to request premium plan');
    }
  }

  async get(query: getRequestListDTO) {
    const { page, limit, userId } = query;
    const skip = limit * (page - 1);
    try {
      const newRequest = await this.prismaService.request.findMany({
        skip,
        take: limit,
        where: {
          userId,
        },
      });
      return newRequest;
    } catch (e) {
      throw new BadRequestException('Failed to get your premium plan');
    }
  }
}
