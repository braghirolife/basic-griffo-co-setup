import myDataSource from "../utils/app-data-source"
import { Customer } from "../models/user";

const session = myDataSource.getRepository(Customer)

async function create(user: Customer){
    let user_to_b_created = new Customer()
    user_to_b_created.username = user.username
    user_to_b_created.person_name = user.person_name
    user_to_b_created.date_of_birth = user.date_of_birth
    user_to_b_created.user_password = user.user_password

    const user_created = session.create(user_to_b_created)
    await session.save(user_created)
    return user_to_b_created
}


export default {
    create
}
