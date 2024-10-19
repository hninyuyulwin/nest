import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { SerializedPerson } from './types/User';

@Controller('persons')
export class PersonsController {

  // constructor(
  //   @Inject('PERSON_SERVICE') 
  //   private readonly 
  //   personsService : PersonsService,
  // ){}
  // // constructor(private readonly personsService : PersonsService){}

  // @Get()
  // getUsers(){
  //   return this.personsService.getUsers();
  // }

  // @UseInterceptors(ClassSerializerInterceptor)
  // @Get(":username")
  // getByUsername(@Param('username') username:string){
  //   const user = this.personsService.getUserByUsername(username);
  //   if(user) return new SerializedPerson(user)
  //   else throw new HttpException("User not found", HttpStatus.BAD_REQUEST);
  // }
}
