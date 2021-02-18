import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from 'src/database/entities/Users.entity';
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
        return await this.userRepository.save(data)
    }
}
