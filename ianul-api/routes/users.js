const express = require('express');
const router = express.Router();
const users = require('../services/users')
router.post("/authenticate",async(req, res, next)=> {
    users.authenticate(req.body)
    .then(user =>{
        if(user)
        {
            res.cookie('token', user.token, {httpOnly: true});
            res.json(user);
        }
        else
        {
            res.status(400).send("Username or password is incorrect" )
        }
    })
    .catch(err => next(err));
})


module.exports = router;
