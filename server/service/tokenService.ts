import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IUser } from '../model/mongo/types';
dotenv.config();

const JWT_ACCESS_SECRET: Secret = process.env.JWT_ACCESS_SECRET || '';
const JWT_REFRESH_SECRET: Secret = process.env.JWT_REFRESH_SECRET || '';

const signToken = (payload: Object) => {
    const accesToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '30d' });
    return { accesToken, refreshToken };
}
const verifyToken = async(token: string, secret: string):Promise<JwtPayload | null> => {
 try {
  const decodedToken = jwt.verify(token, secret) as JwtPayload;
  return decodedToken;
 } catch (error) {
    return null;
 }
}
const checkAndUpdateUserRefreshTokens = async(user:IUser, tokens: JwtPayload): Promise<void> => {

    if(user.refreshTokens.length >= Number(process.env.MAX_TOKENS_ALLOWED) ) user.refreshTokens.shift()
    user.refreshTokens.push(tokens.refreshToken);
    if(user.refreshTokens.length > 1){
        try {
            await verifyToken(user.refreshTokens[0], process.env.JWT_REFRESH_SECRET)
        } catch(error){
            user.refreshTokens.shift()
        }
    }
    await user.save();
}
const removeToken = async(user:IUser, token:string): Promise<IUser> =>{
    user.refreshTokens = user.refreshTokens.filter((refreshToken)=> refreshToken !== token)
    await user.save()
    return user;
}

export default {
    signToken,
    verifyToken,
    checkAndUpdateUserRefreshTokens,
    removeToken
}