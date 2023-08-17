import myDataSource from "src/infra/app-data-source"
import { User } from "src/models/user";

const session = myDataSource.getRepository(User)


async function create(user: User){
        let user_to_b_created = new User()
        user_to_b_created.address = user.address
        user_to_b_created.age = user.age
        user_to_b_created.first_name = user.first_name
        user_to_b_created.last_name = user.last_name

        session.create(user_to_b_created)
        return user_to_b_created
    }

export default {
    create
}
