import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './entities/Users.entity';
import CategoryEntity from './entities/Category.entity'
import BusinessEntity from './entities/Business.entity';
import ServicesEntity from './entities/Services.entity';
import EmployeEntity from './entities/Employe.entity';
@Module({
    imports:[
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
       type: 'postgres', 
       host: process.env.URL_DATABASE ||'localhost',
       username: process.env.POSTGRES_USER,
       password: process.env.POSTGRES_PASSWORD,
       database: process.env.POSTGRES_DB,
       port: parseInt(process.env.PORT_DB),
       synchronize:true,
       ssl: process.env.SSL ? true : false,
       entities: [UserEntity,
                  CategoryEntity,
                  ServicesEntity,
                  BusinessEntity,
                  EmployeEntity
                ]
    })],
    exports: []
})

export class DatabaseModule {}
