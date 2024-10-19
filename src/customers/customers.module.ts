import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './middleware/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware } from './middleware/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
      // consumer.apply(ValidateCustomerMiddleware).forRoutes({
      //   path : "customers/:id",
      //   method : RequestMethod.GET
      // })
      consumer.apply(ValidateCustomerMiddleware, ValidateCustomerAccountMiddleware, 
        (req : Request, res : Response, next: NextFunction) => {
          console.log("Last middleware");
          next();          
      })
      .exclude({
        path : 'customers',method:RequestMethod.GET
      })
      .forRoutes(CustomersController)
  }
}
