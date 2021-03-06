const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



// Filter out all ages greater than 35 
console.log("35<: forEach")
ages.forEach(function(age){
    if (age > 35) {
        console.log(age);
    }
});
// var ageFilter = ages.filter((age)=> age<=35)


// Filter all even numbers

var newArrayEven = ages.filter(function(age){
    return age % 2 === 0;

});

console.log("newArrayEven filter boolean");
console.log(newArrayEven);
/// map through ages array and return a new ages array where 5 is added to each element.

var newArr = ages.map(function(age){
    return age + 5;
});
console.log("map: +5 ");
console.log(ages,newArr);

// any age > 60

var greater = ages.some(function(age){
    return age > 60;
});
console.log("some: " + greater);

//map through the companies array and change the end date to 2020


//using a for loop print each object of companies array 


//using forEach print each object of companies array


companies.forEach(function(item){
    console.log(item.name, item.start, item.end);
});

var cNames = companies.map(function(item){
    return item['name'];
});
console.log(cNames);

var filter90 = companies.filter(function(item){
    return item['start'] > 1990;
});
console.log(filter90);
