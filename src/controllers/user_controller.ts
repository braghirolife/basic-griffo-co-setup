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
    get_user_by_document_number
}