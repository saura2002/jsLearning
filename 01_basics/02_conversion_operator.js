//let score = 33
//we have two types to check the data type
/* console.log(typeof score); 
console.log(typeof (score)); */

/* let assume we have given a string like this */
//let score = "33abc" //string to number
let score = null 

//console.log(typeof score); //string

let valueInNumber = Number(score)

//console.log(typeof valueInNumber); //number but when we console the value there are NaN so we have to carefull there
//console.log(valueInNumber); // NaN // 0 in null case


/* we can use NaN a special value in furtehr program to check values */

/*
conversion into number

"33" => 33 
"33abc" => NaN 
true => 1; false => 0;
null => 0;

*/

/* 
conversion into boolean value
//let isLoggedIn = 111 //true for any number from 1
//let isLoggedIn = 0 //false
//let isLoggedIn = "" //false
//let isLoggedIn = "saurabh" //true
//let isLoggedIn = true //true
//let isLoggedIn = false //false
//let isLoggedIn = NaN //false
//let isLoggedIn = undefined //false
//let isLoggedIn = null //false

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn); 

 */



/* string conversion */
let number = 33

let stringNumber = String (number)
//console.log(stringNumber); // 33 i can see it as a number
//console.log( typeof stringNumber); // string but its type is string


/* ************** Imp operations ******************** */

let value = 2
let negValue= -value
let posValue = +value
//console.log(posValue); //2
//console.log(negValue); //-2

//console.log("1" + 1);     //11
//console.log(1 + "1");     //11
//console.log("1" + "1");   //11
//console.log(1 + 1 + "1"); //21
//console.log("1" + 1 + 1); //111

//study about the prefix and postfix assignment


