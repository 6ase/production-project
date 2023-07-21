import express from 'express';
import { Request, Response } from 'express';
import mongo  from '../model/mongo';
import bcrypt from 'bcrypt';
import auth from '../config/auth'
import mailer from '../config/mailer';
import * as dotenv from 'dotenv';
const uuid = require('uuid');
import { Result, ValidationError, body, validationResult } from 'express-validator';

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

router.post('/signin', 
            body('email').isEmail().withMessage('Указан невалидный email'),
            async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(!req || !password) return res.status(422).send({ error: 'Не все обязательные поля введены.' });
    const userEmail = email.toLowerCase().trim();
    const user = await mongo.findUserByEmail(userEmail);
    if(!user) return res.status(401).send({ error: 'Пользователь не зарегистрирован' });
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) return res.status(401).send({error: 'Неверный пароль'})
    const tokens = await auth.signToken({ 
        name: user.name,
        email,
        id: user._id,
        isActivated: user.isActivated});
    res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    //Продумать алгоритм сохранения в базу данных токена
    return res.status(200).send({ id: user._id, name: user.name, tokens })
});
router.post('/signup',
        body('name').isLength({ min:2, max: 20 })
        .withMessage('Имя должно быть от 2 до 20 символов'),
        body('email').isEmail()
        .withMessage('Указан невалидный email'),
        body('password').matches( /^(?=.*[A-Z])(?=.*\d).{6,20}$/)
        .withMessage('Пароль должен быть от 6 до 20 символов, содержать одну заглавную букву и иметь хотя бы одну цифру'),
        async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors: Result<ValidationError> = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).send({ error: errors.array() });
    if(!email || !password || !confirmPassword) return res.status(422).send({ error: 'Не все обязательные поля введены.' });
    const userEmail = email.toLowerCase().trim();
    const candidate = await mongo.findUserByEmail(userEmail);
    if(candidate) return res.status(401).send({ error: 'Пользователь с таким логином уже зарегистрирован' });
    if(password !== confirmPassword) return res.status(400).send({ error: 'Пароли не совпадают'})
    const hashPassword = await bcrypt.hash(password, 7);
    const link = uuid.v4();
    const userData = { userEmail, name, password: hashPassword, activationLink: link, isActivated: false }
    const user = await mongo.createUser(userData);
    await mailer.sendMail(userEmail, `${process.env.BACKEND_URL}/user/activate/${link}`)
    const tokens = await auth.signToken({ 
        name,
        email,
        id: user?._id,
        isActivated: user?.isActivated});
    res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    //Продумать алгоритм сохранения в базу данных токена
    return res.status(200).send({ id:user?._id, tokens })
});

export {router as userRouter}