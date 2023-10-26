import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { Repository } from 'typeorm';
import { CreateUtilisateurDto } from 'src/utilisateur/dto/create-utilisateur.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation) private reservationRepository: Repository<Reservation>,
    @InjectRepository(Utilisateur) private utilisateurRepository: Repository<Utilisateur>,
  ){}

  async create(createReservationDto: CreateReservationDto) {
    console.log(createReservationDto);
    const reservation = this.reservationRepository.create({
      nom:createReservationDto.nom,
      prenom:createReservationDto.prenom,
      service:createReservationDto.service,
      nombre_de_personne:createReservationDto.nombre_de_personne,
      telephone:createReservationDto.telephone,
      message:createReservationDto.message,
      idutilisateur:createReservationDto.idutilisateur,
    });
    console.log(reservation);
    const result = await this.reservationRepository.save(reservation);
    return result;
  }



 async findAll() {
    return await this.reservationRepository.find();
  }

 async findOne(id: number) {
    return await this.reservationRepository.findOneBy({id});
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
