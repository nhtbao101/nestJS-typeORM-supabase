import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Image } from 'src/entities/image.entity';

@Injectable()
export default class ImageRepository extends Repository<Image> {
  constructor(private dataSource: DataSource) {
    super(Image, dataSource.createEntityManager());
  }
}
