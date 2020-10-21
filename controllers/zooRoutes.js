const Zoo = require('../models/Zoo');
const { Router } = require('express');
const router = Router();

//index route
router.get('/', async (req, res) => {
	res.json(await Zoo.find({}));
});

//create route
router.post('/', async (req, res) => {
	res.json(await Zoo.create(req.body));
});

//update route
router.put('/:id', async (req, res) => {
	res.json(await Zoo.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete('/:id', async (req, res) => {
	res.json(await Zoo.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
