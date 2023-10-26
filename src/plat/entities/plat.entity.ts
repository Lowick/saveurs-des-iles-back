import { Categorie } from "src/categorie/entities/categorie.entity";
import { Image } from "src/image/entities/image.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column()
  idcategorie:number;

  @Column()
  idimage:number;

  // @ManyToOne(()=>Categorie, (categorie) => categorie.plat)
  // categorie:Categorie;
  @ManyToOne(()=>Categorie, {eager: true, cascade:true})
  @JoinColumn({name: 'idcategorie'})
  categorie:Categorie;
  
@OneToOne(()=>Image, {eager: true})
  @JoinColumn({ name: 'idimage' })
  image:Image;

}

