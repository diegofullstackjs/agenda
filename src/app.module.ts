import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AdministratorModule } from './administrator/administrator.module';
import { BusinessModule } from './business/business.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AdministratorModule,
    BusinessModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
