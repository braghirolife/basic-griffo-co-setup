import { json } from "stream/consumers";
import myDataSource from "../utils/app-data-source"
import { Wallet } from "../models/wallet";

const session = myDataSource.getRepository(Wallet)

async function create(wallet_payload: Wallet){
    let wallet_to_b_created = new Wallet()
    wallet_to_b_created.user_key = wallet_payload.user_key

    const wallet_created = session.create(wallet_to_b_created)
    await session.save(wallet_created)
    return wallet_to_b_created
}

export default {
    create
    // get_user_by_document_number
}
