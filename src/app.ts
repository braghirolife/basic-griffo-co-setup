import express, {Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import myDataSource from "./utils/app-data-source";
import UserRoute from "./routers/user_router";
import WalletRoute from "./routers/wallet_router";

setTimeout(() => 
{
    myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })
},
1000);

const app = express()

app.use(morgan('tiny'));

app.use(cors());

app.use(helmet());

app.use(express.json());

// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.send(`INCOMING REQUEST ${req.method}`);
// })

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})

app.use('/user', UserRoute);

app.use('/wallet', WalletRoute)

export default app;