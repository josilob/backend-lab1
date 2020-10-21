require('dotenv').config();
const { PORT = 4000, NODE_ENV = 'development' } = process.env;
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

const mongoose = require('./db/connection');

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.json({ hello: 'Hello World' });
});

const animalRoutes = require('./controllers/animalRoutes');
app.use('/animals', animalRoutes);
const zooRoutes = require('./controllers/zooRoutes');
app.use('/zoos', zooRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
