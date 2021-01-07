
const express = require('express');
const router = express.Router();
const dogs = require('./dogsList');

router.get('/dogs/:id', (req,res) => {
    let id = req.params.id;
    res.send(`<h1>${dogs.data[id].name}</h1> 
    <ul>
        <li><a href ='/dogs/0'> ${dogs.data[0].name}</a></li>
        <li><a href ='/dogs/1'> ${dogs.data[1].name}</a></li>
        <li><a href ='/dogs/2'> ${dogs.data[2].name}</a></li>
        <li><a href ='/dogs/3'> ${dogs.data[3].name}</a></li>
    </ul>
    <img height="300px" src="${dogs.data[id].img}">` );


})

module.exports = router;