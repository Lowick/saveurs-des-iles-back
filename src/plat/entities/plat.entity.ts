import { Categorie } from "src/categorie/entities/categorie.entity";
import { Image } from "src/image/entities/image.entity";
import { Column, Entity, JoinColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Plat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @JoinColumn({ name: 'idcategorie' })
  categorie:Categorie;

  @JoinColumn({ name: 'idimage' })
  image:Image;
}

