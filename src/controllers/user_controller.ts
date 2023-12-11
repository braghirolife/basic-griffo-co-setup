import { Request, Response, NextFunction } from "express";
import { Customer } from "../models/user";
import UserRepository from "../repository/user_repository"
import { cpf } from "cpf-cnpj-validator";

export interface UserInterface{
    id: number,
    user_key: string,
    username: string,
    user_password: string,
    person_name: string,
    date_of_birth: string
}

export interface UserLoginInfo{
    username: string,
    user_password: string
}

 async function create_user(req: Request, resp: Response, next: NextFunction){
    const user = req.body as Customer;
    // const success =  await UserRepository.create(user)
    await UserRepository.create(user)

    if(cpf.isValid(user.document_number) == false) {        
        return resp.status(400).json({ "message": "Invalid CPF" })
    } else {
        return resp.status(200).json({ "message": "created", data: user })
    }
}

async function login_user(req: Request, resp: Response, next: NextFunction){
    const user_login_info = req.body as UserLoginInfo
    const user_in_db = await UserRepository.get_user_by_login_and_password(user_login_info)

    if (user_in_db === null) {
        return resp.status(404).json({
            "message": "Error while trying to login. User not found."
        })
    } else {
        delete user_in_db.user_key
        delete user_in_db.user_password

        return resp.status(200).json({
            "message": "User successfully logged in.",
            "data": user_in_db
        })
    }
}

async function get_user_info(req: Request, resp: Response, next: NextFunction){
    const username = req.query?.username

    if (username === null) {
        return resp.status(404).json({ "message": "User not found." })
    }

    const user_in_db = await UserRepository.get_user_by_login(username?.toString())
        .then((user) => user)

    return resp.status(200).json(user_in_db)
}

export default {
    create_user,
    login_user,
    get_user_info
}