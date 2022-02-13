const express = require('express');
const router = express.Router();
const requests = require('../services/requests');

router.get('/', async function(req, res, next) {
  try {
	res.json(await requests.getAllRequests());
  } catch (err) {
	console.error(`Error while getting requests `, err.message);
	next(err);
  }
});


router.get('/:id', async function(req, res, next) {
  try {
	res.json(await requests.getMyRequests(req.params.id));
  } catch (err) {
	console.error(`Error while getting requests `, err.message);
	next(err);
  }
});
router.put('/:id',async (req,res,next)=>{
  try{
    res.json(await requests.updateRequest(req.params.id,req.body));
  }
  catch(err){
    console.error('Error while updating a request',err.message);
  next(err);
}
})
router.post('/:id', async function(req, res, next) {
  try {
	res.json(await requests.addRequest(req.params.id, req.body));
  } catch (err) {
	console.error(`Error while adding a request `, err.message);
	next(err);
  }
});

module.exports = router;
