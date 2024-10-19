import { Exclude } from "class-transformer"

export interface UserType{
  username : string
  password : string
}

export class SerializedPerson {
  username : string

  @Exclude()
  password : string

  constructor(partial: Partial<SerializedPerson>){
    Object.assign(this,partial);
  }
}