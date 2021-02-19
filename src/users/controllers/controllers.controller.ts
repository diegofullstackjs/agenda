import { Controller,Body, Post, UseGuards,Request, HttpException, HttpStatus } from '@nestjs/common';
import UsersServices from '../services/services'
import UserDTO from '../dto/user.dto'
import { LocalAuthGuard } from 'src/authentication/guards/local-auth.guards';
import { AuthService } from 'src/authentication/services/auth.service';
@Controller('api/v1/users')
export class ControllersController {
    constructor(
        private userService: UsersServices,
        private AuthService: AuthService
    ){

    }
    @Post('create')
    async create(@Body() form: UserDTO ){
            return await this.userService.create(form)
      
    }
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() post){
        return this.AuthService.login(post.user)
    }
}
