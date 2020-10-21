const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

const animalSchema = new Schema(
	{
		type: String,
		age: Number,
		img: String,
	},
	{ timestamps: true }
);

const Animal = model('animal', animalSchema);
module.exports = Animal;
