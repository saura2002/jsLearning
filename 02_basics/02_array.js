const marvel_heros = ["spiderman", "thor", "ironman"]
const dc_heros = ["superman", "batman", "flash"]

//marvel_heros.push(dc_heros) // [ 'spiderman', 'thor', 'ironman', [ 'superman', 'batman', 'flash' ] ]
//console.log(marvel_heros); 
//console.log(marvel_heros[3][1]); //batman

//marvel_heros.concat(dc_heros) //[ 'spiderman', 'thor', 'ironman', [ 'superman', 'batman', 'flash' ] ]
//console.log(marvel_heros);


//const newHeros = marvel_heros.concat(dc_heros) // [ 'spiderman', 'thor', 'ironman', 'superman', 'batman', 'flash' ]
//console.log(newHeros); 

//another method spread operator

//const newHeros = [...marvel_heros, ...dc_heros] //[ 'spiderman', 'thor', 'ironman', 'superman', 'batman', 'flash' ]
//console.log(newHeros);

const another_array = [1,2,3,4, [5,6,7],8,9,[10,11,12,[13,14,15,16,17]]]
const real_another_array =another_array.flat(Infinity) // it solves all depth of arrays or spread out but we have to give exact depth of it to manage it
//console.log(real_another_array);



/* to convert ,ask is it in  a array format or not */

//const newArray = Array.isArray("saurabh") //false its not an array
const newArray = Array.from("saurabh") /* converts it into string ['s', 'a', 'u','r', 'a', 'b','h'] */
//console.log(newArray);

//console.log(Array.from({name:"saurabh"})); // [] given an empty array bcom we have not specify that what we have to convert key or value



/* another method of */

let score1 = 100
let score2 = 200
let score3 = 200

//console.log(Array.of(score1,score2,score3)); //[ 100, 200, 200 ]


let fruits = ["Apple", "Orange", "Plum"];


//console.log( fruits.at(-3) ); // apple


let arr = ["Apple", "Orange", "Pear"];

for (let value in arr) {
  //console.log( key ); // index 0, 1, 2
  //console.log( arr[value] ); // values - apple,orange,pear
}

let arr1 = [1, 2, 3, 4, 5];

/* arr1.length = 2; // truncate to 2 elements
console.log( arr1 ); // [1, 2] */

arr1.length = 7; // 
//console.log( arr1 ); // [ 1, 2, 3, 4, 5, <2 empty items> ]


let newArr = new Array(2); // will it create an array of [2] ?

//console.log( newArr[0] ); // undefined! no elements.

//console.log( newArr.length ); // length 2

let arra = [1, 2, 3];

//console.log( arra ); // [1,2,3]
//console.log( arra.toString() ); // 1,2,3

//console.log(String(arra) === "1,2,3"); //true

let styles = ["Classics","hero","lsat","mt",];
//console.log(styles[Math.floor((styles.length - 1) / 2)] ); //hero
