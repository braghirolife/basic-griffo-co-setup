import { time } from "console";
import { DataSource } from "typeorm"

// console.log(`String text ${process.env.DB_HOST}`)

const myDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "griffo",
    entities: ["src/models/*.{ts,js}"],
    migrations: ["scr/migrations/*.{ts,js}"],
    logging: true,
    synchronize: true,
})

export default myDataSource;