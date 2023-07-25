import express, { Express } from 'express';
import { userRouter } from './routes/userRouter';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const BACKEND_URL = process.env.BACKEND_URL;
const PORT = process.env.PORT;

app.use(cors({
	credentials: true,
	origin: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', userRouter)
app.listen(PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});