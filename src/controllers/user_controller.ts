import { Request, Response, NextFunction } from "express";
import { User } from "src/models/user";
import UserRepository from "../repository/user_repository"

async function create_user(req: Request, resp: Response, next: NextFunction){
    const user = req.body as User;
    
    const user_created = await UserRepository.create(user)
}