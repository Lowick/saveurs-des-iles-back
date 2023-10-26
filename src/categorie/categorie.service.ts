import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { Repository } from 'typeorm';
import { Categorie } from './entities/categorie.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie) private categorieRepository: Repository<Categorie>,
  ){}
  create(createCategorieDto: CreateCategorieDto) {
    return 'This action adds a new categorie';
  }

  async findAll() {
    const allCategories = await this.categorieRepository.find()
    return allCategories
  }

  async findOne(id: number) {

    const found = await this.categorieRepository.findOneBy({id});
    if (!found) {
      throw new NotFoundException(`Categorie with the id ${id} not found`);
    }
    return found;
  }

  update(id: number, updateCategorieDto: UpdateCategorieDto) {
    return `This action updates a #${id} categorie`;
  }

//  async remove(id: number) {
//   try {
//     const categorie = await this.findOne(id);
//     if (!categorie) {
//       throw new NotFoundException('Catégorie non trouvée');
//     }
//     const response = await this.categorieRepository.remove(id.categorie);
//     return response;
//   } catch (error) {
//     // Gérez les erreurs ici
//     throw new InternalServerErrorException('La suppression a échoué : ' + error.message);
//   }
// }
}

