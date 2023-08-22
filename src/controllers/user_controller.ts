import { Request, Response, NextFunction } from "express";
import { User } from "../models/user";
import UserRepository from "../repository/user_repository"

 function create_user(req: Request, resp: Response, next: NextFunction){
    const user = req.body as User;
    const success =  UserRepository.create(user)
    resp.send({
        'status': 'created'
    })
}

function get_user_by_document_number(req: Request, resp: Response, next: NextFunction){
    const params = req.params
    const document_number = params['document_number']

    const user = UserRepository.get_user_by_document_number(document_number)

    if (user === null){
        resp.send({
            'title': 'BAD REQUEST',
            'status_code': 400
        })
        resp.status(400)
    }
    else{
        resp.send({
            'name': user.
        })
        resp.status(200)
    }

}

export default {
    create_user,
    get_user_by_document_number
}