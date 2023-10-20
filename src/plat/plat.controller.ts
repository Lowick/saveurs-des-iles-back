import { Controller, Get, Post, Body, Patch, Param, Delete, UnauthorizedException, UseGuards } from '@nestjs/common';
import { PlatService } from './plat.service';
import { CreatePlatDto } from './dto/create-plat.dto';
import { UpdatePlatDto } from './dto/update-plat.dto';
import { GetUser } from 'src/auth/get-utilisateur.decorator';
import { Utilisateur } from 'src/utilisateur/entities/utilisateur.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('plat')
export class PlatController {
  constructor(private readonly platService: PlatService) {}

  @Post()
  @UseGuards(AuthGuard())
  create(@Body() createPlatDto: CreatePlatDto,
  @GetUser() utilisateur:Utilisateur) {
    if(!utilisateur.admin){
      throw new UnauthorizedException('Droits admin nécéssaires');
    }
    // console.log('controlleur '+JSON.stringify(createPlatDto))
    return this.platService.create(createPlatDto);
  }
  

  @Get()
  findAll() {
    return this.platService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.platService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlatDto: UpdatePlatDto) {
    return this.platService.update(+id, updatePlatDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  remove(@Param('id') id: string, @GetUser() utilisateur: Utilisateur ) {
      if (!utilisateur.admin) {
      throw new UnauthorizedException('Droits admin nécessaires');
    }
    return this.platService.remove(+id);
  }
}
