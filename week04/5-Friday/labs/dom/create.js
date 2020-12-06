

var div = document.createElement('div'); // create div

div.textContent = "Hello World"; // put text in div

//element in div
var anchor = document.createElement('a');
anchor.textContent = "Google"; // node
anchor.setAttribute('href','https://google.com')

div.appendChild(anchor)

//remove an item
var p = document.querySelector('p');

document.body.removeChild(p);


//append div
var body = document.querySelector("body"); //select body

body.appendChild(div); // append div to body


