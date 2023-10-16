import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
   @PrimaryGeneratedColumn()
  id_photo: number;

  @Column({ type: 'varchar', length: 255 })
  nom: string;

  @Column()
  mimetype: string;

  @Column()
  size: number;

  @Column()
  description: string;
}