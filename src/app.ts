import express, {Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import myDataSource from "./infra/app-data-source"

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.send(`INCOMING REQUEST ${req.method}`);
})

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

export default app;