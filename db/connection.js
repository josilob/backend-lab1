require('dotenv').config();
// REVERT LATER
const { MONGODBURI } = process.env;
// const MONGODBURI = 'mongodb://localhost:27017/';
const mongoose = require('mongoose');
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const db = mongoose.connection;
//REVERT FIRST ARGUMENT to MONGODBURI

//coonect to db
mongoose.connect(MONGODBURI, config);

//events
db.on('open', () => console.log('Connected to the Mongo'))
	.on('close', () => console.log('You are disconnected from Mongo'))
	.on('error', (err) => console.log(err));

module.exports = mongoose;
