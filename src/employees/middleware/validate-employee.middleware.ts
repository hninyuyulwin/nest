import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class ValidateEmployeeMiddleware implements NestMiddleware{
  use(req: Request, res: Response, next: NextFunction) {
      console.log("Calling from Employee Middleware");
      
      const {authorization} = req.headers;
      if (!authorization) return res.status(401).send({error : "Invalid User"})
      if(authorization === '123') next();
      else return res.status(403).send({error : "Token invalid"})
  }
}