import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ValidateEmployeeMiddleware } from './middleware/validate-employee.middleware';
import { ValidateEmployeeAccountMiddleware } from './middleware/validate-employee-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports : [DatabaseModule]
})
export class EmployeesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(ValidateEmployeeMiddleware, ValidateEmployeeAccountMiddleware, (req:Request,res : Response,next: NextFunction) => {
        console.log("Last middleware");next();
        
      }).exclude({
        path:"employees/:id",
        method : RequestMethod.GET
      }).forRoutes(EmployeesController)
  }
}
