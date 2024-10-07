/* to denote string we have three types 
1.''
2.""
3.`` string interpolation 

*/

const name = "saurabh"
const lastName = "saini"

//console.log(name + lastName); // this is old method 

//console.log(`hello my name is ${name} and my last name is ${lastName}`); //modern way string interpolation

//another way to define string with new keyword
let fullName = new String('saurabhsaini')

//console.log(fullName);// output with string [String: 'saurabhsaini']
//in browser we also se key value pairs index with letters

//console.log(fullName[0]); // letter s

//console.log(fullName.length); //12 

//console.log(fullName.toUpperCase()); //SAURABHSAINI

//console.log(fullName.charAt(3)); // r

//console.log(fullName.indexOf("r")); //3

const newString = fullName.substring(0,4)
//console.log(newString); //saur
//console.log(newString.lastIndexOf("u")); // 2


const anotherString = fullName.slice(-5,-1)
//console.log(anotherString); // sain

const makeString = "       hello i am a noob         r"
//removes the whitespace from the line
//console.log(makeString.trim());//hello i am a noob 

//remove whitesapce form start
//console.log(makeString.trimStart());//hello i am a noob         r

const url = "https://saurabh.com/saurabh%20saini"
//console.log(url.replace("%20", "-")); //https://saurabh.com/saurabh-saini

//console.log(url.includes("saurabh")); //true

//assignment work with string in window object completed 

let anotherStringIn = "ehlloworls"
console.log(anotherStringIn.split('').join(''));

