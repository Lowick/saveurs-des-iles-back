import { Injectable } from '@nestjs/common';
import { CreatePlatDto } from './dto/create-plat.dto';
import { UpdatePlatDto } from './dto/update-plat.dto';

@Injectable()
export class PlatService {
  create(createPlatDto: CreatePlatDto) {
    return 'This action adds a new plat';
  }

  findAll() {
    return `This action returns all plat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plat`;
  }

  update(id: number, updatePlatDto: UpdatePlatDto) {
    return `This action updates a #${id} plat`;
  }

  remove(id: number) {
    return `This action removes a #${id} plat`;
  }
}
