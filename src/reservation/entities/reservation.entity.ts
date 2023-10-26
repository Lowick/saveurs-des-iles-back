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
  nombre_de_personne: number;

  @Column()
  telephone: number;

  @Column()
  message:string;

  @Column()
  idutilisateur: number;



 @ManyToOne(() => Utilisateur, (utilisateur) => utilisateur.reservation)
 @JoinColumn({ name: 'idutilisateur'})
utilisateur: Utilisateur;

  
}
