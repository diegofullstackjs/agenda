import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CategoryEntity from 'src/database/entities/Category.entity';
import { ControllersController } from './controllers/controllers.controller';
import AdministratorService from './services/administrator.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([CategoryEntity])
  ],
  controllers: [ControllersController],
  providers: [AdministratorService]
})
export class AdministratorModule {}
