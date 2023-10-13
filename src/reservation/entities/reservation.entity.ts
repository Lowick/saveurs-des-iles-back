import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reservation {

     @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  nom: string;

  @Column({ length: 60 })
  prenom: string;

  @Column({ length: 60 })
  service: string;

  @Column()
  nombreDePersonne: number;

  @Column()
  telephone: number;

  @Column()
  date: Date;

  @Column()
  heure: Date;

 @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.reservation)
 @JoinColumn({ name: 'idutilisateur'})
utilisateur: Utilisateur;

  
}
