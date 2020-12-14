// // ***Swap values of the two variables
// var a = "first"
// var b = "second"
// console.log(a, b);
// // second first


var arr = [1,2,3,4];
arr.push(Math.max(...arr));
[ arr[0], arr[1]] = [arr[1],arr.pop()];
console.log(arr);

for (let i of arr){
    console.log(i);
}
a ='blabla';

for(let i of a){
    console.log(i);
}


