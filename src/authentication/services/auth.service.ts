import { Injectable } from '@nestjs/common';
import UsersServices from 'src/users/services/services';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersServices,
        private jwtService:  JwtService
    ){}
    async validateUser(email: string, password: string){
        let user = await this.userService.auth({email})
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
          }
          return null;
    }
    async login(user: any) {
        const payload = { email: user.username, id: user.id };
        return {
          access_token: await this.jwtService.sign(payload),
        };
      }
 }
