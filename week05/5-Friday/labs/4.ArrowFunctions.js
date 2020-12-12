// ***Write these functions with  Arrow Functions

function mult(a, b) {
    return a * b;
}

setTimeout(function () {
    console.log(mult(5, 10));
}, 1000)


// transformed to arrow fct
var mult = (a,b) => a * b;

setTimeout(() => {
    console.log(mult(5, 10));
}, 1000);
