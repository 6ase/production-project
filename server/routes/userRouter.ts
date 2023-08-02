import express from 'express';
import { Request, Response } from 'express';
import mongo  from '../model/mongo';
import bcrypt from 'bcrypt';
import tokenService from '../service/tokenService'
import mailer from '../config/mailer';
const uuid = require('uuid');
import { Result, ValidationError, body, validationResult } from 'express-validator';
import * as dotenv from 'dotenv';
import UserDto from '../service/userDto';
import { IUser } from '../model/mongo/types';
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
            body('email').isEmail().withMessage('Указан не валидный email'),
            async (req: Request, res: Response) => {
    const { email, password } = req.body;
    if(!req || !password) return res.status(422).send({ error: 'Не все обязательные поля введены.' });
    const userEmail = email.toLowerCase().trim();
    const user = await mongo.findUserByEmail(userEmail);
    if(!user) return res.status(401).send({ error: 'Пользователь не зарегистрирован' });
    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) return res.status(401).send({error: 'Неверный логин или пароль'})
    const userDto = new UserDto(user);
    const tokens = await tokenService.signToken({...userDto});
    res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true, path: '/' })
    
    await tokenService.checkAndUpdateUserRefreshTokens(user, tokens);
    return res.status(200).send({ tokens, user: userDto })
});
router.post('/signup',
        body('name').isLength({ min:2, max: 20 })
        .withMessage('Имя должно быть от 2 до 20 символов'),
        body('email').isEmail()
        .withMessage('Указан не валидный email'),
        body('password').matches( /^(?=.*[A-Z])(?=.*\d).{6,20}$/)
        .withMessage('Пароль должен быть от 6 до 20 символов, содержать одну заглавную букву и иметь хотя бы одну цифру'),
        async (req: Request, res: Response) => {
    const { name, email, password, confirmPassword } = req.body;
    const errors: Result<ValidationError> = validationResult(req);
    if(!errors.isEmpty()) return res.status(400).send({ error: errors.array() });
    if(!email || !password || !confirmPassword) return res.status(422).send({ error: 'Не все обязательные поля введены' });
    const userEmail = email.toLowerCase().trim();
    const candidate = await mongo.findUserByEmail(userEmail);
    if(candidate) return res.status(401).send({ error: 'Пользователь с таким логином уже зарегистрирован' });
    if(password !== confirmPassword) return res.status(400).send({ error: 'Пароли не совпадают'})
    const hashPassword = await bcrypt.hash(password, 7);
    const link = uuid.v4();
    const userData = { userEmail, name, password: hashPassword, activationLink: link, isActivated: false }
    const user = await mongo.createUser(userData);
    await mailer.sendMail(userEmail, `${process.env.BACKEND_URL}/user/activate/${link}`);
    const userDto = new UserDto(user);
    const tokens = await tokenService.signToken({...userDto});
    
    res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
    await tokenService.checkAndUpdateUserRefreshTokens(user, tokens);
    return res.status(200).send({ tokens, user: userDto })
});
router.post('/refresh', async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    if(!refreshToken) return res.status(401).send({ error: 'Пользователь не авторизован' })
    const userData = await tokenService.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET);
    const tokenFromDb = await mongo.findToken(refreshToken);
    if(userData && tokenFromDb) {
        const user = await mongo.findUserByEmail(userData.email);
        if(user){
            const userDto = new UserDto(user);
            const tokens = await tokenService.signToken({ ...userDto });
            res.cookie('refreshToken', tokens.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true })
            await tokenService.checkAndUpdateUserRefreshTokens(user, tokens);
            return res.status(200).send({ tokens, user: userDto })
        }
    return res.status(401).send({ error: 'Пользователь не авторизован' })
    }
})
router.get('/logout', async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    const userInfo = await tokenService.verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET)
    const user = await mongo.findUserByEmail(userInfo?.email)
    if(user){
        res.clearCookie('refreshToken');
        await tokenService.removeToken(user, refreshToken);
        return res.sendStatus(200);
    }
    return res.status(401).send({ error: 'Пользователь не авторизован' });
});

export { router as userRouter }