import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Utilisateur) private utilisateurRepository:Repository<Utilisateur>,
  ){}
  async register(createAuthDto: CreateAuthDto) {
    const { pseudo,email, password, admin } = createAuthDto;

    // hashage du mot de passe
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

      // création d'une entité utilisateur
    const utilisateur = this.utilisateurRepository.create({
      pseudo,
      email,
      password:hashedPassword,
      admin: false,
    });

     try {
      const createdUtilisateur = await this.utilisateurRepository.save(utilisateur);
      delete createdUtilisateur.password;
      return createdUtilisateur;
    } catch (err) {
      if (err.code === '23505') {
        throw new ConflictException('Ce pseudo existe deja');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
