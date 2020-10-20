require('dotenv').config();
// const mongoose = require('./db/connection');
const express = require('express');
const app = express();
const logger = require('morgan');
const { PORT } = process.env;
const cors = require('cors');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ hello: 'Hello World, welcome to my first Fullstack App' });
});

const animalRoutes = require('./controllers/animalRoutes');
app.use('/animals/', animalRoutes);
const zooRoutes = require('./controllers/zooRoutes');
app.use('/zoos/', zooRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
