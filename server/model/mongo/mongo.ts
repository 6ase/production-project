import mongoose  from 'mongoose';
import user from './userSchema';
import { IUser } from './types';

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

export default{
	db,
	findUserByEmail,
}