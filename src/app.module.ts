import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { UsersModule } from './users/users.module';
import { PracticeModule } from './practice/practice.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { CustomersModule } from './customers/customers.module';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [PropertyModule, UsersModule, PracticeModule, DatabaseModule, EmployeesModule, CustomersModule, PersonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
