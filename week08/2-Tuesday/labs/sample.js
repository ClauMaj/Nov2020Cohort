
let name = "Claude";
let log = require("./log");

console.log(log.firstName);

module.exports = name;

log.info("great day")
log.warning("covid 2020")
log.error("wrong")

let Stack = require("./stack");

let stack1 = new Stack();
let stack2 = new Stack();

stack1.push(3)
stack1.push(30)
stack1.push(23)
stack1.push(33)

console.log(stack1.peek());

const superheroes = require('superheroes');

console.log(superheroes.all);
console.log(superheroes.random());

