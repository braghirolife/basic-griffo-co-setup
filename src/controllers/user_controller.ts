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
    const user_in_db = UserRepository.get_user_by_login_and_password(user_login_info)
    if (user_in_db === null){
        resp.status(404)
        resp.send(
            {
                "message": "Error while trying to login. User not found."
            }
        )
        return
    } 

    resp.status(200)
    resp.send(
        {
            "message":  "User successfully logged in."
        }
    )
}

async function get_user_info(req: Request, resp: Response, next: NextFunction){
    const username = req.query?.username

    if (username === null) {
        resp.status(404)
        resp.send({
            "message": "User not found."
        })
        return
    }

    const user_in_db = await UserRepository.get_user_by_login(username?.toString()).then((user) => user)

    resp.status(200)
    resp.send(
        user_in_db
    )

}

export default {
    create_user,
    login_user,
    get_user_info
}