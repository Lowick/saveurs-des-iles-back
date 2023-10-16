import { Injectable } from '@nestjs/common';
import { CreateAviDto } from './dto/create-avi.dto';
import { UpdateAviDto } from './dto/update-avi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { Avis } from './entities/avi.entity';

@Injectable()
export class AvisService {

  constructor(
    @InjectRepository(Avis) private avisRepository:Repository<Avis>,
    @InjectRepository(Utilisateur) private utilisateurRepository:Repository<Utilisateur>,
  ){}

  async createdAvis(createAviDto: CreateAviDto) {
    const newAvis = new Avis();
    newAvis.avis= createAviDto.avis;
    newAvis.utilisateur= createAviDto.idutilisateur;

    const createdAvis = await this.avisRepository.save(newAvis);

    return  createdAvis;
    

  }

 async findAll() {
  const allAvis = await this.avisRepository.find();
    return allAvis
    };
 
  findOne(id: number) {
    return `This action returns a #${id} avi`;
  }

  update(id: number, updateAviDto: UpdateAviDto) {
    return `This action updates a #${id} avi`;
  }

  remove(id: number) {
    return `This action removes a #${id} avi`;
  }
}
