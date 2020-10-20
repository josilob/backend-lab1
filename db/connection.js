require('dotenv');
// REVERT LATER
// const { MONGODBURI } = process.env;
const mongoURI = 'mongodb://localhost:27017/';
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;
//REVERT FIRST ARGUMENT to MONGODBURI
mongoose.connect(mongoURI, config);

db.on('open', () => console.log('Connected to the Mongo'))
	.on('close', () => console.log('You are disconnected from Mongo'))
	.on('error', (err) => console.log(err));
module.exports = mongoose;
