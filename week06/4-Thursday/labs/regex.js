
//exec and test
// let patt = /long/
// let result = patt.exec('great long day today');
// let result = patt.test('great long day today');

// console.log(result); 


// match
// let patt = /e/gi;

// let str = "bEst things in life are free"

// let arr = str.match(patt);
// console.log(arr);



// let pattern = /Batman|Tina Fey/g;
// let str = "Batman and Tina Fey.";
// // let result = pattern.exec(str);
// //or
// let result = str.match(pattern);

// console.log(result);


// let patt = /(\d\d\d)-(\d\d\d-\d\d\d\d)/
// let phone = "My phone number is 333-343-2445"
// let result = phone.match(patt)
// console.log(result);


let pattern = /Bat(man|mobile|copter|bat)/gi;
let str = "Batman lost a wheel batbat";
let result = str.match(pattern);
console.log(result);


let patt = /(\d\d\d-?)?(\d\d\d-\d\d\d\d)/gi