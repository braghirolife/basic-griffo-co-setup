import { json } from "stream/consumers";
import myDataSource from "../utils/app-data-source"
import { Customer } from "../models/user";
import { UserInterface } from "src/controllers/user_controller";
import {v4 as uuidv4} from 'uuid';

const session = myDataSource.getRepository(Customer)

async function create(user: Customer){
    let user_to_b_created = new Customer()
    user_to_b_created.username = user.username
    user_to_b_created.person_name = user.person_name
    // user_to_b_created.date_of_birth = user.date_of_birth
    user_to_b_created.user_password = user.user_password

    const user_created = session.create(user_to_b_created)
    await session.save(user_created)
    return user_to_b_created
}

// async function get_user_by_document_number(owner_name: string){
//     let user = session.findOne({
//         'where': {
//             last_name : owner_name
//         }
//     })    

//     return user
// }

export default {
    create
    // get_user_by_document_number
}
