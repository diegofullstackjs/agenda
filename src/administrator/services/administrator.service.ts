import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import CategoryEntity from 'src/database/entities/Category.entity';
import { Repository } from 'typeorm';
import CategorieDTO from '../dto/Categorie.dto';

@Injectable()
export default class AdministratorService {
    constructor(
        @InjectRepository(CategoryEntity)
        private categorieRepository: Repository<CategoryEntity>
    ){}

    async createCategoria(form: CategorieDTO): Promise<CategoryEntity | null> {
        return this.categorieRepository.save(form)
    }
}
