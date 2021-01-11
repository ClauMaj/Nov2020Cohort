const express = require('express');
const router = express.Router();

let dataFile = require('../data/data.json');

router.get('/speakers', (req,res) => {
    let pagePhotos = [];
    dataFile.speakers.forEach( el => {
        pagePhotos = pagePhotos.concat(el.artwork);
    });
    res.render('speakers',{
        artwork: pagePhotos,
        speakers: dataFile.speakers
    });
});


router.get('/speakers/:speakerid', (req,res) => {
        let photos = [];
        let speakers = [];
    dataFile.speakers.forEach( el => {
        if (el.shortname ===req.params.speakerid){
            photos = el.artwork;
            speakers.push(el)
        }
        
    });
    
    res.render('speakers', {
        artwork: photos,
        speakers: speakers
    });
})

module.exports = router;