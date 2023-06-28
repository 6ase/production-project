import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import { userRouter } from './routes/userRouter';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors({
	credentials: true,
	origin: true,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter)
app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});