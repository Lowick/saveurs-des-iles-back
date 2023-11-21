import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { AvisService } from './avis.service';
import { CreateAviDto } from './dto/create-avi.dto';
import { UpdateAviDto } from './dto/update-avi.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('avis')
export class AvisController {
  constructor(private readonly avisService: AvisService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(
    @Request() req,
    @Body() createAviDto: CreateAviDto) {
      console.log("create");
      const createdAvis = await this.avisService.createdAvis(createAviDto)
    return createdAvis
  }

  @Get()
  findAll() {
    return this.avisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAviDto: UpdateAviDto) {
    return this.avisService.update(+id, updateAviDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avisService.remove(+id);
  }
}
