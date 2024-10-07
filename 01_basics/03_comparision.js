//console.log( 2 > 3 ); // false
//console.log( 2 >= 3 ); //false
//console.log( 2 < 3 ); // true
//console.log( 2 == 3 ); // false
//console.log( 2 === 3 ); // false
//console.log( 2 != 3 ); // true



/*
the reason is that an equality check == and comparison > < >= work differently. comparisons convert null to a number, treating it as 0
that's why in 3rd row null >= 0 is true and on 1 row null > 0 is false 
console.log( null > 0 );
console.log( null == 0 );
console.log( null >= 0 );

 */

/* console.log( undefined >= 0 ); //false
console.log( undefined > 0 ); //false
console.log( undefined < 0 ); //false
console.log( undefined == 0 ); //false
 */

/*
All are false.

console.log(NaN > 0);
console.log(NaN < 0);
console.log(NaN == 0);
console.log(NaN >= 0);
console.log(NaN === 0); */
