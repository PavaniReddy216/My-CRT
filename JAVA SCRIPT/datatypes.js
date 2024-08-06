//sample program on data types
var employeeid=1002;  //number 
var employeename=pavani;  //string
var employeenumber=9848022338;  //number
var contractemployee=true; //boolean
var employeesal=982;  
var employeepf=null; // null
var medicalallow;  //undefined
var enames=["pavani","pavani","pavani"];  //array


var employeeinfo= {//object
employeeid:2004,
employeename:"pavani",
enumber:9848022338
}
console.log(employeeid);
console.log(employeename);
console.log(contractemployee);
console.log(employeenumber+""+employeesal);
console.log(employeepf);
console.log(medicalallow);
console.log(enames);
console.log(employeeinfo);


//how to know datatypes of any field 
console.log(typeof(employeeid));
console.log(typeof(employeeinfo));
console.log(typeof(employeename));
console.log(typeof(contractemployee));
console.log(typeof("employeenumber"+"employeesal"));
console.log(typeof(employeepf));
console.log(typeof(medicalallow));
console.log(typeof(enames));


// null,array,object------>object
//advance,symbol
//bigInt ,symbol
var wiproturnover=BigInt(9848223386987676);
console.log(typeof(wiproturnover));
var studentname=Symbol("pavani");
var studentname1=Symbol("pavani");
console.log(studentname==studentname1);