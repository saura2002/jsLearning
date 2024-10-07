/* primitive  
ther are 7 types 
1.Number 
2.String
3.Boolean
4.Bigint
5.null ( for unknown values – a standalone type that has a single value null.) It is a special value with a separate type of its own. in type of operator it shows an object whih is a error of operator for null
6.undefined (or unassigned values – a standalone type that has a single value undefined)
7.symbol is used for unique identity 

*/
const symbol = Symbol('123')
const anoSymbol = Symbol('123')

/*bith give same output but they are not same 
console.log(anoSymbol);
console.log(symbol);
 */
//console.log(symbol === anoSymbol); false


/* non-primitive or refernce 
1.array for collection of types
2.object for collection of types in a key value pair
3.functions is a a group or a single line code that we can run multiple times without writing all  the code agai and again
*/

let Bigint = 232422424222425224352n
//console.log(typeof Bigint); bigint


/* ******** Memory ******** */

/* Stack (primitive) in stack we get  the copy there we are not changing the values in original */

/* heap (Non-primitive) in heap we get the reference of the value where we are changing the original value */