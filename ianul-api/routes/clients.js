const express = require('express');
const router = express.Router();
const clients = require('../services/clients');

/* GET a client by email and password. */

router.get('/:email/:password', async function(req, res, next){
	try {
		const additional = {
			"os": req.headers.os,
			"version": req.headers.version,
			"token": req.headers.token
		}
		res.json(await clients.getByEmailAndPassword(req.params.email, req.params.password, additional));
	} catch (err) {
		console.error(`Error while login client `, err.message);
		next(err);
	}
});

/* Register a client */

router.post('/', async function(req, res, next){
	try {
		const additional = {
			"os": req.headers.os,
			"version": req.headers.version,
			"token": req.headers.token
		}
		res.json(await clients.register(req.body, additional));
	} catch (err) {
		console.error(`Error while creating a client `, err.message);
		next(err);
	}
});

/* Update a client */
router.put('/:id', async function(req, res, next){
	try {
		const additional = {
			"os": req.headers.os,
			"version": req.headers.version,
			"token": req.headers.token
		}
		console.log(additional)
		res.json(await clients.update(req.params.id, req.body, additional));
	} catch (err) {
		console.error(`Error while creating a client `, err.message);
		next(err);
	}
});

router.get('/', async function(req, res, next) {
  try {
	res.json(await clients.getMultiple(req.query.page));
  } catch (err) {
	console.error(`Error while getting clients `, err.message);
	next(err);
  }
});

module.exports = router;
