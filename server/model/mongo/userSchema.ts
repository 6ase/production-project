import { model, Schema } from 'mongoose';
import { IUser } from './types';

const userSchema = new Schema<IUser>({
	userEmail: { type: String, unique: true }, // используется как логин 
	name: String,
	password: String, // хешированный пароль,
	isActivated: Boolean,
	activationLink: String,
	refreshTokens: [ String ],
});

export default model('User', userSchema);