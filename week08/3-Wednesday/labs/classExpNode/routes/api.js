

const express = require('express');
const router = express.Router();
const dogs = require('./dogsList');

router.get('/api',(req,res) => {
    res.json(dogs.data);
})

module.exports = router;