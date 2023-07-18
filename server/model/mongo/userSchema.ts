import { model, Schema } from 'mongoose';
import { IUser } from './types';

const userSchema = new Schema<IUser>({
	userEmail: { type: String, unique: true }, // используется как логин 
	password: String, // хешированный пароль,
	isActivated: Boolean,
	activationLink: String,
	refreshTokens: [ String ],
	accesTokens: [ String ],
});

export default model('User', userSchema);