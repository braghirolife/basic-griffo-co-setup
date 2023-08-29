import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "griffo_setup",
    entities: ["src/models/*.{ts,js}"],
    migrations: ["scr/migrations/*.{ts,js}"],
    logging: true,
    synchronize: false,
})

export default myDataSource;