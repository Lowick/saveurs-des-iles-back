import { IsInt, IsString } from "class-validator";
import { Categorie } from "src/categorie/entities/categorie.entity";
import { Image } from "src/image/entities/image.entity";


export class CreatePlatDto {
    @IsString()
    nom:string;

    
    categorie:Categorie;

   
    image:Image;
}
