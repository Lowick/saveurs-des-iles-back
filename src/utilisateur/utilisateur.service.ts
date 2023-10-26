import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Utilisateur } from './entities/utilisateur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UtilisateurService {
  
  constructor(
    @InjectRepository(Utilisateur)
    private utilisateurRepository:Repository<Utilisateur>,
  ){}

  create(createUtilisateurDto: CreateUtilisateurDto) {
    return 'This action adds a new utilisateur';
  }

  async findAll() {
    return await this.utilisateurRepository.find();
  }

 async findOne(id: number) {
   const utilisateurFound = await this.utilisateurRepository.findOneBy({ id });
    if (!utilisateurFound) {
      throw new NotFoundException(`Utilisateur with the id ${id} not found`);
    }
    return utilisateurFound;
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
