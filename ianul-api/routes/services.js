const express = require('express');
const router = express.Router();
const services = require('../services/services');

router.get('/', async function(req, res, next) {
  try {
	res.json(await services.getAll());
  } catch (err) {
	console.error(`Error while getting services `, err.message);
	next(err);
  }
});


module.exports = router;
