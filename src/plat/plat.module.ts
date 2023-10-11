import { Module } from '@nestjs/common';
import { PlatService } from './plat.service';
import { PlatController } from './plat.controller';
import { Plat } from './entities/plat.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategorieModule } from 'src/categorie/categorie.module';
import { ImageModule } from 'src/image/image.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Plat]),
    CategorieModule,
    ImageModule,
  ],
  controllers: [PlatController],
  providers: [PlatService],
})
export class PlatModule {}
