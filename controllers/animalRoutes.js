const Animal = require('../models/Animal');
const { Router } = require('express');
const router = Router();

//index route
router.get('/', async (req, res) => {
	res.json(await Animal.find({}));
});

//create route
router.post('/', async (req, res) => {
	res.json(await Animal.create(req.body));
});

//update route
router.put('/:id', async (req, res) => {
	res.json(
		await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true })
	);
});

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Animal.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
