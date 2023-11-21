import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(Utilisateur) private utilisateurRepository:Repository<Utilisateur>,
    private jwtService: JwtService,
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

  async login (loginDto: LoginDto) {
    const { email, password} = loginDto;
    const utilisateur = await this.utilisateurRepository.findOneBy({email});

    if(utilisateur && (await bcrypt.compare(password, utilisateur.password))){
      const payload = {email};
      const accessToken = await this.jwtService.sign(payload);
      return {accessToken, utilisateur};
    }else{
      throw new UnauthorizedException(
        'Ces identifiants ne sont pas bons'
      );
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
