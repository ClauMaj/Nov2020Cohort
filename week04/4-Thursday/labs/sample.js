// console.log('Joe')
// console.log('Jacob')
// console.log('Claude')

// var name = "claude"
// console.log(name);
// var age = 20;
// if (age >= 18) {
//     console.log("You get free beer");
// }

// if (age >= 21) {
//     console.log("You get free beer");
// } else if (age < 18) {
//     console.log("What are you even doing here?");
// } else {
//     console.log("Sorry no beer for you");
// }

// var expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }


// var fruit = "Papayas";
// switch(fruit){
//     case "Oranges":
//         console.log("Oranges");
//         break;
//     case "Mangoes":
//         console.log("Mangoes")
//         break;
//     case "Papayas":
//         console.log('Papayas')
//         break;
//     default:
//         console.log('default')
// }

// var count = 1;
// while(count<=10){
//     console.log(count);
//     count++;
// }

// var num = -12345;
// console.log(num);
// let a = num.toString();
// let b = a.split('');
// let c = b.reverse();
// let d = c.join('');
// num = parseInt(d);
// console.log(num);

var phoneBook = {
    firstName: "meme",
    lastName: "yoyo"
};
phoneBook['midleName'] = "gogo";

delete phoneBook['firstName']
console.log(phoneBook);

function fname (){
    console.log("a function");
}
fname()
function add(num){
    return num + 1;
}

console.log(add(1));
console.log("The sum is ", add(1));
console.log(`The sum of the numbers is ${add(2)}`);