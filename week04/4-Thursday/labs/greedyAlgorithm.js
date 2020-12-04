
// var arr = [6 ,7 ,8 ,5];

// for (var index = 0; index < arr.length;index++ ){
//     arr[index]
// }

var arr = [25, 10, 5];

var sum = 50;
var count = 0;
var index = 0; 
// TWO WHILES
while (sum > 0) {
    sum = sum - arr[index];
    while (sum < arr[index]) {
        index++;
    }
    count++;
    
}
console.log(count);
// ONE WHILE
while (sum > 0) {
    if (sum <= arr[index]) {
        sum -= arr[index]
        count++;
    }
    else {index++;
    }
}
console.log(count);