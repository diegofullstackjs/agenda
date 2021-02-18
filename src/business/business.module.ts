import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import BusinessEntity from 'src/database/entities/Business.entity';
import BusinessController from './controllers/business.controller';
import BusinesService from './services/business.services'
@Module({
    imports:[TypeOrmModule.forFeature([BusinessEntity])],
    controllers: [BusinessController],
    providers:[BusinesService]
})
export class BusinessModule {}
