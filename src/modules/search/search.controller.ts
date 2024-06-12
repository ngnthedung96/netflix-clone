import { Controller, Get, Param, Query, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { SearchService } from './search.service';
import { ParamsDictionary } from 'express-serve-static-core'; // Import từ express-serve-static-core

@Controller('search')
export class SearchController {
  constructor(private searchService: SearchService) {}
  @Get('/multiple')
  async searchMulti(@Query() param: ParamsDictionary) {
    return await this.searchService.searchMultple(param);
  }
  @Get('/person')
  async searchPerson(@Query() param: ParamsDictionary) {
    return await this.searchService.searchPerson(param);
  }
}
