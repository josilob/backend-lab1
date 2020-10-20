require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const { PORT } = process.env;
app.use(logger('dev'));

const cors = require('cors');
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ hello: 'Hello World, welcome to my first Fullstack App' });
});

const animalRouter = require('./controllers/animalRoutes');
app.use('/animals/', animalRouter);
const zooRouter = require('./controllers/zooRoutes');
app.use('/zoos/', zooRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
