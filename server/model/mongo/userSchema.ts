import { model, Schema } from 'mongoose';
import { IUser } from './types';

const userSchema = new Schema<IUser>({
	lastName: String,
	firstName: String, // имя пользвателя.
	fathersName: String,
	userEmail: { type: String, unique: true }, // используется как логин 
	salt: String, // соль для генерации пароля 
	password: String, // хешированный пароль 
	refreshTokens: [ String ],
	accesTokens: [ String ],
});

module.exports = model('User', userSchema);