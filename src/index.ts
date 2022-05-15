import express, { Express } from 'express';
import dotenv from 'dotenv';
import apiRouter from './routes';
import dbInit from './db/init';

dotenv.config();
dbInit();

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1', apiRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at port ${port}`);
});