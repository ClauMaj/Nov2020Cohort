const { fchown } = require("fs");

let log = {
    firstName: "james",
    lastName: 'bond',
    age: 100,
    info: function (info){
        console.log(`Info ${info}`);
    },
    warning: function(warning){
        console.log(`Warning ${warning}`);
    },
    error: function(error){
        console.log(`Error ${error}`);
    },
}


module.exports = log;