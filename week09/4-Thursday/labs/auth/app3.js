
const express = require('express');
const app = express();
const helmet = require('helmet');


app.use(express.static('public'));
app.use(helmet());

let authLogin = (req, res, next) => {
    console.log(`checking auth`);
    next();
}

app.get('/', authLogin, (req,res,next) => {
    if (true) {
        res.send('home');
    }
    else{
        next(new Error ("there's an error"))
    }
})



app.listen(3000, () => {
    console.log('running on 3000');
})