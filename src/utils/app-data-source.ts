import { time } from "console";
import { DataSource } from "typeorm"

// console.log(`String text ${process.env.DB_HOST}`)

const myDataSource = new DataSource({
    type: "postgres",
    // host: "172.18.0.3",
    // host: "mysql-db",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "griffo",
    // socketPath: "/temp/mysql.sock",
    entities: ["src/models/*.{ts,js}"],
    migrations: ["scr/migrations/*.{ts,js}"],
    logging: true,
    synchronize: false,
})

export default myDataSource;