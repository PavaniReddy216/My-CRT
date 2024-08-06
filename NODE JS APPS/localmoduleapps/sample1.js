import {mul, sname,enames,employeeinfo} from "./sample.js";
console.log(sname) 


const result=mul(30,20);
console.log("result is " +result );


for(let ename of enames)
{
    console.log(ename);
}


for (let employee in employeeinfo) 
{
    console.log(employeeinfo[employee]);
}
const employ = Object.assign({}, employeeinfo);
console.log(employ);