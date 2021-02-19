import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/authentication/services/auth.service';
import UserEntity from 'src/database/entities/Users.entity';
import { ControllersController } from './controllers/controllers.controller';
import  UsersServices  from './services/services';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: String(process.env.SECRET_KEY) ||   'mysecret',
      signOptions: { expiresIn: '7d' },
    })
  ],
  controllers: [ControllersController],
  providers: [UsersServices,AuthService],
})
export class UsersModule {}
