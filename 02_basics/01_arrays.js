//array

// to declare array
//1. Using Square Brackets ([])
//This is the most common way to declare an array.
let myArray = [1, 2, 3, 4, 5];
//2. Using the Array Constructor
//You can also declare an array using the Array constructor.
let MyArray = new Array(1, 2, 3, 4, 5);
//Both methods result in the same array, but using square brackets is more common and easier to read.

//ARRAY METHODS 

myArray.push(8)
myArray.push(7)
myArray.push(6)
myArray.pop() // [ 1, 2, 3, 4, 5, 8,7 ] 
myArray.unshift(0) // [ 0,1, 2, 3, 4, 5, 8,7 ] // NoTe - insert on starting it is very time consuming because to insert 0 thevalues shift its indexes 
//console.log(myArray); 
//MyArray.shift() // [ 2, 3, 4, 5 ] //NoTe =  remove element from starting not good o rmemory bcom each element then the second have to come to first index to fill the gap
//console.log(MyArray);
//console.log(MyArray.includes(5)); //true
//console.log(MyArray.indexOf(5)); //3 bcz we used shift to remove an element

//console.log(MyArray.splice(0,4));

//join

//console.log(MyArray.join()); // given an string 1,2,3,4,5
//console.log(typeof MyArray.join()); // string


//slice and splice

 let mn1 = [1,2,3,4,5]
 //console.log(mn1.slice(0,3));
 //console.log(mn1);
let mn2 = [1,2,3,4,5,6,7]

/* in splice it manupulates the original array where it cuts the portion of it ad gives the output look in example below */
//console.log(mn2.splice(0,6)); // [ 1, 2, 3, 4, 5, 6 ]
//console.log(mn2); //[ 7 ]
