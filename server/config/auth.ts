import jwt, { Secret } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

const JWT_ACCESS_SECRET: Secret = process.env.JWT_ACCESS_SECRET || '';
const JWT_REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET || '';

const signToken = (payload: Object) => {
    const accesToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m' })
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' })
    return { accesToken, refreshToken }
}


export default {
    signToken
}