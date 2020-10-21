const { Schema, model } = require('mongoose');
const mongoose = require('../db/connection');

const zooSchema = new Schema(
	{
		name: String,
		city: String,
		animals: [{ ref: 'Animal', type: Schema.Types.ObjectId }],
	},
	{ timestamps: true }
);

const Zoo = model('zoo', zooSchema);
module.exports = Zoo;
