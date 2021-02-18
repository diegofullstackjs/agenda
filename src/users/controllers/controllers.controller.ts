import { Controller,Body, HttpException, HttpStatus, Post } from '@nestjs/common';
import UsersServices from '../services/services'
import UserDTO from '../dto/user.dto'
@Controller('api/v1/users')
export class ControllersController {
    constructor(
        private userService: UsersServices
    ){

    }
    @Post('create')
    async create(@Body() form: UserDTO ){
            return await this.userService.create(form)
      
    }
}
