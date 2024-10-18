import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ParseIdPipe implements PipeTransform<string,number> {
  transform(value: string, metadata: ArgumentMetadata): number {
      const val = parseInt(value,10);
      if(isNaN(val)){
        throw new BadRequestException("ID must be a number");
      }
      if(val <= 0){
        throw new BadRequestException("ID must be positive number");
      }
      return val;
  }
}