import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import UserRepository from "../repository/user_repository"

async function create_user(req: Request, resp: Response, next: NextFunction){
    const user = req.body as User;
    console.log('aaaa')
    const success = await UserRepository.create(user)
}

export default {
    create_user
}