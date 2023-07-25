import mongoose  from 'mongoose';
import user from './userSchema';
import { IUser } from './types';
import * as dotenv from 'dotenv';
dotenv.config();

const db = mongoose.connection;
db.on('error', (err) => {
	console.log('Data base error: ', err);
});

mongoose.connect(
	'mongodb://127.0.0.1/',
	{
		dbName: process.env.DB_NAME || 'ProductionProject',
	});
mongoose.connection.on('connected', () => {
	console.log('connected!');
});
      
mongoose.connection.on('error', (err) => {
	console.log('can not connect to database!', err);
});

const findUserByEmail = (email: string): Promise<IUser | null> => user.findOne({ userEmail: email })

const findUserByLink = (link: string): Promise<IUser | null> => user.findOne({ activationLink: link })

const createUser = (userData:object): Promise<IUser> => user.create(userData);

const findToken = (token: string): Promise<IUser | null> => user.findOne({ refreshTokens: token })

export default {
	db,
	findUserByEmail,
	findUserByLink,
	createUser,
	findToken,
}