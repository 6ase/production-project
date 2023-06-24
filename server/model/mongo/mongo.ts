import mongoose  from 'mongoose';

const db = mongoose.connection;

db.on('error', (err) => {
	console.log('Data base error: ', err);
});

mongoose.connect(
	'mongodb://127.0.0.1/',
	{
		dbName: process.env.DB_NAME,
	});
mongoose.connection.on('connected', () => {
	console.log('connected!');
});
      
mongoose.connection.on('error', (err) => {
	console.log('can not connect to database!', err);
});