import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';

@Injectable()
export class UtilisateurService {
  utilisateurRepository: any;
  create(createUtilisateurDto: CreateUtilisateurDto) {
    return 'This action adds a new utilisateur';
  }

  findAll() {
    return `This action returns all utilisateur`;
  }

 async findOne(id: number) {
   const found = await this.utilisateurRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Utilisateur with the id ${id} not found`);
    }
    return found;
  }

  update(id: number, updateUtilisateurDto: UpdateUtilisateurDto) {
    return `This action updates a #${id} utilisateur`;
  }

  remove(id: number) {
    return `This action removes a #${id} utilisateur`;
  }
}
