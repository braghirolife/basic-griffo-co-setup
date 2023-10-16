import { Request, Response, NextFunction } from "express";
import { Wallet } from "src/models/wallet";
import WalletRepository from "../repository/wallet_repository"

export interface UserInterface{
    id: number,
    user_key: string,
    username: string,
    user_password: string,
    person_name: string,
    date_of_birth: string
}

// <{}, {}, UserInterface>,

 async function create_wallet(req: Request, resp: Response, next: NextFunction){
    const wallet_payload = req.body as Wallet;
    // const user : UserInterface = req.body
    const success =  await WalletRepository.create(wallet_payload)
    resp.send({
        'message': 'created'
    })
    resp.status(200)
}

export default {
    create_wallet,
}