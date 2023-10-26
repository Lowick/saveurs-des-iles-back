import { Controller, Get, Post, Body, Patch, Param, Delete,Res, UseInterceptors, UploadedFile, StreamableFile } from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  // @Post()

  // create(@Body() createImageDto: CreateImageDto) {
  //   return this.imageService.create(createImageDto);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('monFichier'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.imageService.create(file);
  }

  // @Get()
  // findAll() {
  //   return this.imageService.findAll();
  // }

  // @Get()
  // async getPhotos(@Res({ passthrough: true }) res): Promise<StreamableFile> {
  //   return this.imageService.getImage(res);
  // }

  @Get(':id')
  getImageById(
    @Param('id') id: string,
    @Res({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    console.log(id);
    return this.imageService.getImageById(+id, res);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imageService.update(+id, updateImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
