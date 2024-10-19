import { Injectable } from '@nestjs/common';
import { CustomerDto } from 'src/customers/dto/customer.dto';

@Injectable()
export class CustomersService 
{

  users = [
    {
      id : 1,
      email : 'admin@test.com'
    },
    {
      id : 2,
      email : 'user@test.com'
    },
    {
      id : 3,
      email : 'lavender@test.com'
    },
    {
      id : 4,
      email : 'daisy@test.com'
    },
    {
      id : 5,
      email : 'tulip@test.com'
    },
  ]

  findCustomerById(id : number){
    return this.users.find((user) => user.id === id);
  }

  findAll(){
    return this.users
  }

  create(customerDto : CustomerDto){
    return this.users.push(customerDto);
  }
}
