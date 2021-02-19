import { Controller,Body, HttpException, HttpStatus, Post, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import BusinessDTO from '../dto/business.dto';
import BusinesService from '../services/business.services';
@Controller('api/v1/business')
export default class BusinessController {
    constructor(
        private bussinesService: BusinesService
    ){

    }
    @Get("all" )
    async index(){
        try {
            return this.bussinesService.index()
        }catch{
           return new HttpException('Aconteceu erro em cadastrar sua empresa',HttpStatus.BAD_REQUEST)
        }
    }
    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    async create(@Body() form: BusinessDTO ){
        try {
            return this.bussinesService.create(form)
        }catch{
           return new HttpException('Aconteceu erro em cadastrar sua empresa',HttpStatus.BAD_REQUEST)
        }
    }
}
