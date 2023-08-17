import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "griffo_setup",
    entities: ["src/models/*.js"],
    logging: true,
    synchronize: true,
})

export default myDataSource;