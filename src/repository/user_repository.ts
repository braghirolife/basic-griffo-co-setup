import myDataSource from "../utils/app-data-source"
import { Customer } from "../models/user";
import { UserLoginInfo } from "../controllers/user_controller";

const session = myDataSource.getRepository(Customer)

async function create(user: Customer){
    let user_to_b_created = new Customer()
    user_to_b_created.username = user.username
    user_to_b_created.person_name = user.person_name
    user_to_b_created.date_of_birth = user.date_of_birth
    user_to_b_created.user_password = user.user_password
    user_to_b_created.document_number = user.document_number

    const user_created = session.create(user_to_b_created)
    await session.save(user_created)
    return user_to_b_created
}

async function get_user_by_login_and_password(user_login_info: UserLoginInfo){
    const user_in_db = await session.findOne({
        where: {
            username: user_login_info.username,
            user_password: user_login_info.user_password
        }
    }).then((customer) => customer).catch(() => console.log("Error while gettin User from database"))

    return user_in_db
}

async function get_user_by_login(username: string){
    const user_in_db = await session.findOne({
        where: {
            username: username
        }
    }).then((user) => user)

    return user_in_db
}


export default {
    create,
    get_user_by_login_and_password,
    get_user_by_login
}
