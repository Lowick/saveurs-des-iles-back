import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
  


  

}
