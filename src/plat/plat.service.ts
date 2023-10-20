import { Injectable } from '@nestjs/common';
import { CreatePlatDto } from './dto/create-plat.dto';
import { UpdatePlatDto } from './dto/update-plat.dto';
import { Image } from 'src/image/entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Plat } from './entities/plat.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Repository } from 'typeorm';


@Injectable()


export class PlatService {
  constructor(
    @InjectRepository(Plat) private platRepository: Repository<Plat>,
    @InjectRepository(Categorie) private categorieRepository: Repository<Categorie>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ){}

  async create(createPlatDto: CreatePlatDto) {
    console.log(createPlatDto);
    const plat = this.platRepository.create({
      nom:createPlatDto.nom,
      categorie:createPlatDto.categorie,
      image:createPlatDto.image
    });
    console.log(plat);
    const result = await this.platRepository.save(plat);
    
    
    return result;
  }

  async findAll() {
    return await this.platRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} plat`;
  }

  update(id: number, updatePlatDto: UpdatePlatDto) {
    return `This action updates a #${id} plat`;
  }

  remove(id: number) {
    return `This action removes a #${id} plat`;
  }
}
