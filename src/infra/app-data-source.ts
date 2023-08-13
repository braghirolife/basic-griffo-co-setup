import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: ["src/models/*.js"],
    logging: true,
    synchronize: true,
})

export default myDataSource;