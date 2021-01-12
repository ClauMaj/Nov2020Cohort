const express = require('express');
const router = express.Router();

let dataFile = require('../data/data.json');

router.get('/', (req,res) => {

    let pageSpeakers = dataFile.speakers
    let pagePhotos = [];
    pageSpeakers.forEach( el => {
        pagePhotos = [...pagePhotos,...el.artwork];
        // pagePhotos = pagePhotos.concat(el.artwork);
    })

    res.render('index',{
        photos: pagePhotos
    });

})

module.exports = router;