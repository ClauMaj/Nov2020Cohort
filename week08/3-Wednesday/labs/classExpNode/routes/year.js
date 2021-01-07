
const express = require('express');
const router = express.Router();

router.get('/year',(req,res) => {
    var today = new Date();
    var year = today.getFullYear() - req.query.age;
    if ((today.getMonth() - req.query.m) < 0 ) {
        year--;
    }

    
    res.send(`Your birth year is: ${year}`)
})

module.exports = router;