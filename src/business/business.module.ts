import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BusinessEntity from 'src/database/entities/Business.entity';
import UserEntity from 'src/database/entities/Users.entity';
import UsersServices from 'src/users/services/services';
import BusinessController from './controllers/business.controller';
import BusinesService from './services/business.services'
@Module({
    imports:[TypeOrmModule.forFeature([BusinessEntity,UserEntity])],
    controllers: [BusinessController],
    providers:[BusinesService,UsersServices]
})
export class BusinessModule {}
