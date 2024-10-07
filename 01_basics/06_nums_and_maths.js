/* for explicitly defining the datatype */

const balance = new Number(100)
//console.log(balance); // [Number: 100]
//console.log(balance.toString().length); // it gives more methods to use in prototype
//console.log(balance.toFixed(2)); // 100.00 tips: for ecommerce application

const otherNumber = 123.3943

//console.log(otherNumber.toPrecision(3)); // value dependecy matters

const hundreds = 1000000

//console.log(hundreds.toLocaleString('en-IN'));

/* ********** MATHS ************ */

console.log(Math.abs(-3)); //3
console.log(Math.round(4.6)); //5
           console.log(Math.ceil(4.1)); //5
           console.log(Math.floor(4.8)); //4
console.log(Math.min(2,3,4,5)); //2
console.log(Math.max(2,3,4,5)); //5
console.log(Math.random()); //random value in points
console.log((Math.random()*10)+1); //random value confirm that never gets the 0 
console.log(Math.floor(Math.random()*10)+1); //lowest number without point 

const min = 10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + max );

