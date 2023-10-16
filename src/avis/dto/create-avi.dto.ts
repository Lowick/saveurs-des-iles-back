import { IsString, isInt } from "class-validator";
import { Utilisateur } from "src/utilisateur/entities/utilisateur.entity";

export class CreateAviDto {
    @IsString()
    avis:string;

    
    idutilisateur:number;

    utilisateur:Utilisateur
}
