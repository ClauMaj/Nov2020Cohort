
const http = require('http');
const someName = require('./sample');

console.log(someName);


const server = http.createServer((request, response) => {
    
    response.statusCode = 200;

    switch(request.url){

        case '/':
            response.setHeader('Content-Type', 'text/html');
            response.end(`<h1> Hello Node</h1>`);
            break;
        case '/aboutus':
            response.setHeader('Content-Type', 'text/html');
            response.end(`<h1>About us</h1>`);
            break;
        case '/data':
            response.setHeader('Content-Type', 'application/json');
            let students = [{firstName: "Veronica", lastName: "Lino"},{firstName: "Matt", lastName: "Kim"}];
            let studentStr = JSON.stringify(students);
            response.end(studentStr);
            break;
        default:
            response.setHeader('Content-Type', 'text/html');
            response.end(`You've reached an error`);
            break;

    }
})
server.listen(3000, ()=>{
    console.log("Running on port 3000");
})

console.log(http);