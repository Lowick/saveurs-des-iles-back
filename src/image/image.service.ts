import { Injectable, NotFoundException, StreamableFile } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class ImageService {
  remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  update(arg0: number, updateImageDto: UpdateImageDto) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectRepository(Image) private imageRepository: Repository<Image>
  ){}

  create(img: Express.Multer.File) {
    console.log('notre img' + img.originalname);
    return this.imageRepository.save({
      nom: img.filename,
      mimetype: img.mimetype,
      size: img.size,
      description: img.originalname,
    });
  }

  // async findAll() {
  //   return await this.photoRepository.find();
  // }

  // async getImage(res): Promise<StreamableFile> {
  //   const result = await this.imageRepository.find();
  //   console.log(result);
  //   let imageFile;
  //   const imageTab = [];
  //   // const lastResult = result[result.length - 1];
  //   // console.log(lastResult);
  //   for (let i = 0; i < result.length; i++) {
  //     imageFile = createReadStream(
  //       join(process.cwd(), 'uploads', result[i].nom),
  //     );
  //     res.set('Content-Type', result[i].mimetype);
  //     imageTab.push(imageFile);
  //   }
  //   console.log(imageTab[imageFile]);
  //   return new StreamableFile(imageFile);
  // }

  async getImageById(id: number, res): Promise<StreamableFile> {
    const result = await this.imageRepository.findOneBy({ id});
    if (!result) {
      throw new NotFoundException(`The photo ${id} is not found !`);
    }
    const imageFile = createReadStream(
      join(process.cwd(), 'uploads', result.nom),
    );
    res.set('Content-Type', result.mimetype);
    console.log('mon image', imageFile);
    return new StreamableFile(imageFile);
  }

}