
const express = require('express');
const app = express();

app.use(express.static('public'));


//subroutes
app.use(require('./routes/index'));  // '/'
app.use(require('./routes/about')); // '/about'
app.use(require('./routes/contact'));  // '/contact/:name'
app.use(require('./routes/api')); //'/api'
app.use(require('./routes/flight'));  // '/flights?/:from/:to'
app.use(require('./routes/calc'));  // '/calculat(e|or)/:n1/:n2/:op'
app.use(require('./routes/dogs')); // '/dogs/:id'
app.use(require('./routes/year')); // '/year?age&m'


app.listen(3000, () => {
    console.log("Running on port 3000");
});
