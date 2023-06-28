import express from 'express';
import { Request, Response } from 'express';
import mongo  from '../model/mongo';

const router = express.Router();

router.post('/signin', async (req:Request, res: Response) => {
    if (!req.body.email || !req.body.password) return res.status(422).send({ error: 'Не все обязательные поля введены.' });
    
    const userEmail = req.body.email.toLowerCase().trim();
    const user = await mongo.findUserByEmail(userEmail);
    if (!user) return res.status(401).send({ error: 'Пользователь не зарегистрирован' });
});
export {router as userRouter}