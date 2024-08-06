// Date Objects
const x1= new Date();
console.log(x1);

const x2 = new Date("2022-03-25");
console.log(x2);


//new Date(date string)

const d = new Date("February, 2024 11:13:00");
console.log(d);

//new Date(year, month, ...)
const d1 = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d1);

//Using 6, 4, 3, or 2 Numbers
//using 6
const d2 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d2);
//using 5
const d3 = new Date(2018, 11, 24, 10, 33);
console.log(d3);
//using 4
const d4 = new Date(2018, 11, 24, 10);
console.log(d4);
//uisng 3
const d5 = new Date(2018, 11, 24);
console.log(d5);
//using 2
const d6 = new Date(2018, 11);
console.log(d6);


//Displaying Dates
const a = new Date();
console.log(a.toString());

const b= new Date();
console.log(b.toDateString());

// const c = new Date();
// console.log(c.toUTCSString());

// const e = new Date();
// console.log(e.toISOSString());

//DATA FORMATS
//ISO Dates
const a1 = new Date("2024-02-06");
console.log(a1);

//Short Dates.
const a2= new Date("06/02/2024");
console.log(a2);

//long dates
const a3 = new Date("Feb 06 2024");
console.log(a3);




//Get Date Methods
//getFullYear() Method
const a4 = new Date();
 console.log(a4.getFullYear());
//getMonth() Method
const a5 = new Date();
console.log( a5.getMonth() + 1);
// getDate() Method
const a6 = new Date();
console.log( a6.getDate());
// getHours() Method
const a7 = new Date();
console.log( a7.getDate());
//getMinutes() Method
const a8 = new Date();
console.log( a8.getDate());
//getSeconds() Method
const a9 = new Date();
console.log( a9.getDate());
//getMilliseconds() Method
const a10 = new Date();
console.log( a10.getDate());
//getDay() Method
const a11 = new Date();
console.log( a11.getDate());
//getTime() Method
const a12 = new Date();
console.log( a12.getDate());
//Date.now() Method
const date = Date.now();
console.log(date);


//Set Date Methods


// setFullYear() Method
const v = new Date();
console.log(v.setFullYear(2020));
//setMonth() Method
const v1 = new Date();
console.log(v1.setMonth(12));


//setDate() Method
const v2 = new Date();
console.log(v2.setDate(16));
//setHours() Method
const v3= new Date();
console.log(v3.setHours(22));
//setMinutes() Method
const v4 = new Date();
console.log(v4.setMinutes(30));
//setSeconds() Method
const v5 = new Date();
console.log(v5.setSeconds(30));
