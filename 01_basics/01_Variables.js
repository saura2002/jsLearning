/* 
// 1. Basics of Variables
// Definition: A variable is a container for storing data values.
// Declaration Keywords:
// var (function-scoped)
// let (block-scoped)
// const (block-scoped, cannot be reassigned) 
*/
/* prefer not use var 
because of issue in block and functional scope.
*/
/* 
let blockScoped; // Declare outside the block
if (true) {
    blockScoped = "I'm block-scoped"; // Initialize inside the block
    var functionScoped = "I'm function-scoped";
}
console.log(blockScoped); // Logs: "I'm block-scoped"
console.log(functionScoped); // Logs: "I'm function-scoped"
Remember, let variables are block-scoped, so they won’t be accessible outside the block they are declared in unless you declare them in a wider scope first. 
 */

/* 
let name = "saurabh"
let SurName = "saini"
age = 22 // this is not a good practice
let state;
console.table([name,SurName,age]) //right syntax followed by square brackets for table print

console.log(state); //undefined we decalre it but not assigned any value in it

alert('hello') //cannot use in node but we can use it on browser
 */

/* 
++++++++++++++++++ Data types ++++++++++++++++++++
// null => standalone value , we can use as when we have to give empty value
// undefined => a value declared but not defined
// symbol => it is mostly use to find uniqueness and its mostly use in react
// object
*/


/* 
let name = 'saurabh'

console.log(typeof undefined); // undefined bcoz it is a type in js
console.log(typeof null); // object 

 */