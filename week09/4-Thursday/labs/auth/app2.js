
const express = require('express');
const app = express();
var cookieSession = require('cookie-session');

app.use(cookieSession({
    name: 'session',
    keys: ['secretText'],
    maxAge: 14*24*60*60*1000     // milliseconds 
}))


app.get('/',(req,res) => {
    req.session.name = "veronica";
    res.send('home page')

})

app.get('/about',(req,res) => {
    req.session.name = "veronica";
    res.send(req.session.name)

})





app.listen(3000, () => {
    console.log('running on 3000');
})