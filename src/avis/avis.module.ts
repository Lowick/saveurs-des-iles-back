import { Module } from '@nestjs/common';
import { AvisService } from './avis.service';
import { AvisController } from './avis.controller';
import { UtilisateurModule } from 'src/utilisateur/utilisateur.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avis } from './entities/avi.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Avis]),
    UtilisateurModule,
  ],
  controllers: [AvisController],
  providers: [AvisService],
})
export class AvisModule {}
