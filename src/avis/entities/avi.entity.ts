import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['utilisateur'])
export class Avis {
    @PrimaryGeneratedColumn()
        id:number;

 @Column()
 avis:string;

 @OneToOne(() => Utilisateur, {eager:true})
@JoinColumn({name: 'idutilisateur'})
utilisateur: number;
 


    
}
