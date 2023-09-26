import { json } from "stream/consumers";
import myDataSource from "../utils/app-data-source"
import { Userr } from "../models/user";

const session = myDataSource.getRepository(Userr)

async function create(user: Userr){
    let user_to_b_created = new Userr()
    user_to_b_created.age = user.age
    user_to_b_created.first_name = user.first_name
    user_to_b_created.last_name = user.last_name

    const user_created = session.create(user_to_b_created)
    await session.save(user_created)
    return user_to_b_created
}

async function get_user_by_document_number(owner_name: string){
    let user = session.findOne({
        'where': {
            last_name : owner_name
        }
    })    

    return user
}

export default {
    create,
    get_user_by_document_number
}
