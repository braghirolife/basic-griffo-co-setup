import { DataSource } from "typeorm"

// console.log(`String text ${process.env.DB_HOST}`)

const myDataSource = new DataSource({
    type: "mysql",
    host: "172.18.0.2",
    // host: "172.0.0.1",
    port: 3306,
    username: "root",
    password: "password",
    database: "griffo_setup",
    // socketPath: "/temp/mysql.sock",
    entities: ["src/models/*.{ts,js}"],
    migrations: ["scr/migrations/*.{ts,js}"],
    logging: true,
    synchronize: false,
})

export default myDataSource;