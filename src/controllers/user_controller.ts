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
    const success =  await UserRepository.create(user)
    if(cpf.isValid(user.document_number) == false){
        resp.status(400)
        resp.send(
            {
                "message": "Invalid CPF"
            }
        )
    }
    resp.send({
        'message': 'created'
    })
    resp.status(200)
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


function get_user_by_document_number(req: Request, resp: Response, next: NextFunction){
    // const params = req.params
    // const document_number = params['document_number']

    // const user = UserRepository.get_user_by_document_number(document_number)

    // if (user === null){
    //     resp.send({
    //         'title': 'BAD REQUEST',
    //         'status_code': 400
    //     })
    //     resp.status(400)
    // }
    // else{
    //     resp.send({
    //         'name': user.
    //     })
    //     resp.status(200)
    // }
    return
}

export default {
    create_user,
    login_user
}