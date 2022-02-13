const express = require('express');
const router = express.Router();
const messages = require('../services/messages');

router.get('/:id', async function(req, res, next) {
  try {
	res.json(await messages.getMessages(req.params.id, req.body));
  } catch (err) {
	console.error(`Error while getting a new message`, err.message);
	next(err);
  }
});

router.post('/:id', async function(req, res, next) {
  try {
	res.json(await messages.addMessage(req.params.id, req.body));
  } catch (err) {
	console.error(`Error while adding a new message`, err.message);
	next(err);
  }
});


module.exports = router;
