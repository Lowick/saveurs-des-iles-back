import { Plat } from "src/plat/entities/plat.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
   @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nom: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column()
  description: string;

  
}