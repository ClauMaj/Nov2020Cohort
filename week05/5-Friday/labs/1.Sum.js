// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

// sum(1,3);
// sum(10, 20, 5);

var sum = (...args) => {
    // let s = 0;
    // for (var i=0; i < args.length; i++) {
    //     s += args[i];
    // };
    return args.reduce((acc,val) => {
        return acc+val;
    }, 0)
}

console.log(sum(10, 20, 5));
console.log(sum(1,3));
