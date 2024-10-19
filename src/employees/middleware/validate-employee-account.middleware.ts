import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateEmployeeAccountMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction) {
      const {valid} = req.headers;
      console.log("From Employee Account Validation");
      
      if(valid) next();
      else res.status(403).send({error : "Acount is invalid"})
  }
}