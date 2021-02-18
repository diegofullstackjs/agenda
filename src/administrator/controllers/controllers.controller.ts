import { Body, Controller, Delete, HttpException, HttpStatus, Post } from '@nestjs/common';
import CategorieDTO from '../dto/Categorie.dto';
import AdministratorService from '../services/administrator.service';

@Controller('api/v1/administrator')
export class ControllersController {
    constructor(
        public administratorService: AdministratorService
    ){

    }
    @Post('create/categorie')
    async createCategorie(@Body() form: CategorieDTO) {
        try {
            return this.administratorService.createCategoria(form)
        }catch{
            return new HttpException('Não foi possivel cadastrar essa categoria',HttpStatus.BAD_REQUEST)
        }
    }

    @Delete('delete/categorie')
    async createA(@Body() form: CategorieDTO) {
        
    }
}
