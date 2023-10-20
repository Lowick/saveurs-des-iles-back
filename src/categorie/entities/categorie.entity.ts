import { Plat } from "src/plat/entities/plat.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categorie {
     @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nom: string;

  // @OneToMany(() =>Plat, (plat)=>plat.categorie, {eager:true})
  // plat:Plat[];
  // @JoinColumn({name:'idcategorie'})
  @OneToMany(() => Plat, (plat)=>plat.categorie)
  plats: Plat[];
}
