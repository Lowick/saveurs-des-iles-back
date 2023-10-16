import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { MulterModule } from '@nestjs/platform-express';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports:[
    MulterModule.register({
      dest:'uploads',
    }),
    TypeOrmModule.forFeature([Image]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [ImageController],
  providers: [ImageService],
  exports:[ TypeOrmModule.forFeature([Image])]
})
export class ImageModule {}
