import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // this module can be used globally
@Module({
  imports: [
  ],
  providers:[PrismaService],
  exports:[PrismaService] //other modules can use this service

})
export class PrismaModule {}
