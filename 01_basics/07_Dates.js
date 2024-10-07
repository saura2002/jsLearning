let myDate = new Date()
//console.log(myDate); //2024-10-07T04:48:58.804Z
//console.log(myDate.toString()); //Mon Oct 07 2024 10:20:05 GMT+0530 (India Standard Time)
//console.log(myDate.toDateString()); //  Mon Oct 07 2024
//console.log(myDate.toLocaleDateString()); //  7/10/2024
//console.log(myDate.toJSON()); // 2024-10-07T04:52:20.293Z
//console.log(myDate.toLocaleString()); // 7/10/2024, 10:22:54 am
//console.log(myDate.toLocaleTimeString()); // 10:23:52 am
//console.log(typeof myDate); // object

/* timestamps */
let date = new Date("01-14-2024")
let time = Date.now()
//console.log(date.getTime()); //from given date to till now milisecs
//console.log(Math.round(Date.now()/1000)); //1728277421


/* for specific date,day,hours etc */

let anotherDay = new Date()
//console.log(anotherDay.getDate()); // date is 7
//console.log(anotherDay.getFullYear()); // year is 2024
//console.log(anotherDay.getMonth() + 1); // month 10 oct + 1 bcoz index start form 0 here

/* to customize the localstrng */
let customize = anotherDay.toLocaleString('default', {
    weekday: "long",
    day:"2-digit",
    era:"long"
})
console.log(customize); //Monday 07 Anno Domini
