import { Controller, Get, HttpException, Param, ParseIntPipe, Post, Req, Res, UseFilters } from '@nestjs/common';
import { CustomerDto } from 'src/customers/dto/customer.dto';
import { UserNotFoundException } from 'src/customers/exceptions/UserNotFound.exception';
import { HttpExceptionFilter } from 'src/customers/filters/HttpException.filter';
// import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {

  constructor (private customerService : CustomersService){}

  @Get()
  getAll(){
    return this.customerService.findAll()
  }

  @UseFilters(HttpExceptionFilter)
  @Get(':id')
  getCustomers(@Param('id', ParseIntPipe) id : number) {
    const customer = this.customerService.findCustomerById(id)
    if(!customer) throw new UserNotFoundException("The user you finding is not here");
    return customer;
  }

  @Post('create')
  createCustomer(customerDto : CustomerDto){
    return this.customerService.create(customerDto);
  }
}
