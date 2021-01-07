
const express = require('express');
const router = express.Router();

router.get('/calculat(e|or)/:n1/:n2/:op',(req,res) => {
    
    // res.send(`sum is: ${parseInt(req.params.n1)+parseInt(req.params.n2)}`)
    let result = eval(req.params.n1+req.params.op+req.params.n2)
    res.send(`The result of ${req.params.n1}${req.params.op}${req.params.n2} is ${result}`)
})

module.exports = router;