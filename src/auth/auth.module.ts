import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Utilisateur])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
