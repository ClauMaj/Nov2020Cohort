
var promise = new Promise((resolve,reject) =>{
    if(true){
        //code
        let sum
        resolve(sum);
    }
    else {
        reject("there was an error");
    }
});

// promise.then(response => response.json());

promise.then(params => {
    console.log(params);
})

promise.catch(error => {
    console.log(error);
})


let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([p1,p2])
.then(responseArr=>{
    respArr[0].data.json();
    respArr[1].data.json();
    return responseArr;
})
.then(data =>{
    console.log(data);
})