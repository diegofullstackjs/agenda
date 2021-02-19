import { AuthenticationModule } from './authentication/authentication.module';

import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AdministratorModule } from './administrator/administrator.module';
import { BusinessModule } from './business/business.module';

@Module({

  imports: [
    DatabaseModule,
    UsersModule,
    AdministratorModule,
    BusinessModule,
    AuthenticationModule,
  ]
})
export class AppModule { }
