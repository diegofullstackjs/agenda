import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import UserEntity from 'src/database/entities/Users.entity';
import UsersServices from 'src/users/services/services';
import { UsersModule } from 'src/users/users.module';
import {AuthService} from './services/auth.service'
import { JwtStrategy } from './strategies/jwt-strategies.service';
import { LocalStrategy } from './strategies/local-strategies.service';
@Module({
    imports: [
        UsersModule,
        TypeOrmModule.forFeature([UserEntity]),
        PassportModule,
        JwtModule.register({
            secret: String(process.env.SECRET_KEY) ||   'mysecret',
            signOptions: { expiresIn: '7d' },
          })
    ],
    controllers: [],
    providers: [AuthService,UsersServices,LocalStrategy,JwtStrategy],
    exports:[JwtModule,AuthService]
})
export class AuthenticationModule {}
