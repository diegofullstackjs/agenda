import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from 'src/database/entities/Users.entity';
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm';
import UserDto from '../dto/user.dto';

@Injectable()
export default class UsersServices {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ) {

    }
   async create(data: UserDto): Promise<UserEntity | null>{
        let salt = await bcrypt.genSalt();
        data.password = await bcrypt.hash(data.password, salt)
        return await this.userRepository.save(data)
    }
   async auth(data:Omit<UserDto,'password'>) : Promise<UserEntity | null> {
       return await this.userRepository.findOne({email:data.email})
   }
}
