import { Body, Controller, Get, Headers, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { HeadersDto } from './dto/headers.dto';

@Controller('property')
export class PropertyController {
  @Get()
  getAll(){
    return "Returning getall property.";
  }

  @Get(":id")
  // getById(@Param('id') id:string, @Param("slug") slug:string){
  getById(@Param('id' , ParseIntPipe) id, @Query("sort", ParseBoolPipe) sort){
    console.log(typeof id , sort);
    
    // return `id : ${id} & slug : ${slug}`;
    return id;
  }

  @Post()
  @HttpCode(202)
  // @UsePipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true}))
  // createProperty(@Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, groups:['create'], always:true})) body : CreatePropertyDto){
  createProperty(@Body() body : CreatePropertyDto){
    return body;
  }

  @Patch(":id")
  // update(@Param() id : IdParamDto, @Body(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true, groups:['update'],  always:true})) body : CreatePropertyDto){
  // update(@Param() {id} : IdParamDto, @Body() body : CreatePropertyDto){
  update(
    @Param("id", ParseIdPipe) id,
    @Body() body : CreatePropertyDto, 
    @Headers() header : HeadersDto
  )
  {
    return header;
  }
}
