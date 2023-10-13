import { Injectable } from '@nestjs/common';
import { CreatePlatDto } from './dto/create-plat.dto';
import { UpdatePlatDto } from './dto/update-plat.dto';
import { Image } from 'src/image/entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Plat } from './entities/plat.entity';
import { Categorie } from 'src/categorie/entities/categorie.entity';
import { Repository } from 'typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';

@Injectable()


export class PlatService {
  constructor(
    @InjectRepository(Plat) private platRepository: Repository<Plat>,
    @InjectRepository(Categorie) private categorieRepository: Repository<Categorie>,
    @InjectRepository(Image) private imageRepository: Repository<Image>,
  ){}

  async create(createPlatDto: CreatePlatDto) {
    const newPlat = this.platRepository.create(createPlatDto);
    const result = await this.platRepository.save(newPlat);
    return result;
  }

  findAll() {
    return `This action returns all plat`;
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
