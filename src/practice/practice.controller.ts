import { Controller, Get, Query, Param, Body, Post, Patch, Delete, ParseIntPipe } from '@nestjs/common';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {

  constructor(private readonly practicesService : PracticeService){}

  @Get()
  getAll(@Query("role") role?: 'INTERN' | "ENGINEER" | "ADMIN")
  {
    return this.practicesService.findAll(role)
  }

  @Get(":id")
  findOne(@Param("id") id:string){
    return this.practicesService.findOne(+id)
  }

  @Post()
  create(@Body() body : {name:string, email:string, role:"INTERN" | "ENGINEER" | "ADMIN"}){
    return this.practicesService.create(body)
  }

  @Patch(":id")
  update(@Param("id") id:string, @Body() body : {name?:string, email?:string, role?:"INTERN" | "ENGINEER" | "ADMIN"}){
    return this.practicesService.update(+id, body)
  }

  @Delete(":id")
  delete(@Param("id") id:string){
    return this.practicesService.delete(+id)
  }
}
