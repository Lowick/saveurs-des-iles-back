import { Reservation } from "src/reservation/entities/reservation.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Utilisateur {

 @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  pseudo: string;

  @Column()
  email: string;
  
  @Column()
  password: string;

  @Column()
  admin: boolean;


   @OneToMany(() => Reservation, (reservation )=> reservation.utilisateur)
  reservation: Reservation;


  

}


