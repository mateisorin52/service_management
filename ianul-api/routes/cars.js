const express = require('express');
const router = express.Router();
const cars = require('../services/cars');

router.get('/:id', async function(req, res, next){
	try {
		res.json(await cars.getMyCars(req.params.id));
	} catch (err) {
		console.error(`Error while getting the cars `, err.message);
		next(err);
	}
});

router.post('/:id', async function(req,res,next){
	try {
		res.json(await cars.addCar(req.params.id, req.body));
	} catch (err) {
		console.error(`Error while adding the car `, err.message);
		next(err);
	}
});

router.put("/:id", async function(req, res, next){
	try {
		res.json(await cars.editCar(req.params.id, req.body));
	} catch (err) {
		console.error(`Error while modifing the cars `, err.message);
		next(err);
	}
})

router.delete("/:id", async function(req, res, next){
	try {
		res.json(await cars.deleteCar(req.params.id, req.body));
	} catch (err) {
		console.error(`Error while deleting the cars `, err.message);
		next(err);
	}
})

module.exports = router;