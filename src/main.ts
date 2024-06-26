import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // add middleware here
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
