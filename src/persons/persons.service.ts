import { Injectable } from '@nestjs/common';
import { SerializedPerson, UserType } from './types/User';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PersonsService {
  private users : UserType[] = [
    {
      username : "mason",
      password : "mount"
    },
    {
      username : "david",
      password : "david"
    },
    {
      username : "sofia",
      password : "sofia"
    },
  ]

  getUsers(){
    return this.users.map((user) => plainToClass(SerializedPerson,user))
  }

  getUserByUsername(username : string){
    return this.users.find((user) => user.username === username)
  }
}
