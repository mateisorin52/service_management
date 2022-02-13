const express = require('express');
const router = express.Router();
const brands = require('../services/brands');

router.get('/', async function(req, res, next){
	try {
		res.json(await brands.get());
	} catch (error) {
		console.error(`Error while getting the brands`, error.message);
		next(error);
	}
});


module.exports = router;