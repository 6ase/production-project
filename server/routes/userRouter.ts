import express from 'express';
import { Request, Response } from 'express';
import mongo  from '../model/mongo';
import bcrypt from 'bcrypt';
import auth from '../config/auth'
import mailer from '../config/mailer';
import * as dotenv from 'dotenv';
import { IUser } from '../model/mongo/types';
const uuid = require('uuid');
dotenv.config();

const router = express.Router();

router.get('/activate/:link', async (req: Request, res: Response) => {
 const user = await mongo.findUserByLink(req.params.link);
 if(user) {
    user.isActivated = true;
    await user.save();
    return res.redirect(process.env.CLIENT_URL || '')
 }
 else throw new Error('Некорректная ссылка активации');
})

router.post('/signin', async (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) return res.status(422).send({ error: 'Не все обязательные поля введены.' });
    
    const userEmail = req.body.email.toLowerCase().trim();
    const user = await mongo.findUserByEmail(userEmail);
    if (!user) return res.status(401).send({ error: 'Пользователь не зарегистрирован' });
});
router.post('/signup', async (req: Request, res: Response) => {
    const { email, password, confirmPassword } = req.body;
    if (!email || !password || !confirmPassword) return res.status(422).send({ error: 'Не все обязательные поля введены.' });
    const userEmail = email.toLowerCase().trim();
    const candidate = await mongo.findUserByEmail(userEmail);
    if (candidate) return res.status(401).send({ error: 'Пользователь с таким логином уже зарегистрирован' });
    if (password !== confirmPassword) return res.status(400).send({ error: 'Пароли не совпадают'})
    const hashPassword = await bcrypt.hash(password, 7);
    const link = uuid.v4();
    const userData = { userEmail, password: hashPassword, activationLink: link, isActivated: false }
    const user = await mongo.createUser(userData);
    await mailer.sendMail(userEmail, `${process.env.BACKEND_URL}/user/activate/${link}`)
    const tokens = await auth.signToken({ 
        userEmail: user?.userEmail,
        id: user?._id,
        isActivated: user?.isActivated});
    res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    return res.status(200).send({ id:user?._id, tokens })
});

export {router as userRouter}