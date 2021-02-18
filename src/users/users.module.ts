import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from 'src/database/entities/Users.entity';
import { ControllersController } from './controllers/controllers.controller';
import  UsersServices  from './services/services';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [ControllersController],
  providers: [UsersServices]
})
export class UsersModule {}
