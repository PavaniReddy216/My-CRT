
// employee Portal 

// --->task 1 
// employeeid,ename,mobilenumber

// --->task 2
// basical , pf ,hra,pass all these values as parameters to function 
// ---->task 3
// return sal from function


// function myfunc(){ //basic info
//     const employeeid=1001;
//     const ename="pavani";
//     const mobilenumber = 9848022448;
//     var employeeinfo={employeeid,ename,mobilenumber}
// console.log(employeeinfo)
// }
// myfunc()



// //function for salary
// function add(basicsal,pf, hra)
// {
//     return basicsal-pf+hra;
// }
// let salary=add(5000,2000,3000);
// let bonus =5000;
// console.log("your salary is: "+ salary)



// //bonus logic
// if(salary>50000)
// {
//     console.log("employee total salary is :"+ (salary+bonus))
// }
// else{
//     console.log("your not elligible ")
// }


// //es6
// //arrow functions
// //() , =>(fat arrow) , statements
// //arrow function without parameters
// const result=() =>{
//     console.log("welcome");
// }
// result();

// //without block
// const result1=()=>
// console.log("hello");
// result1();

// //arrow function with parameters
// const result2=(a,b) =>
// console.log("sum is:" +(a+b));
// result2(20,30);

// //arrow function with return value
// const result3=(a,b)=>{
//     return a*b;
// }
// const finalresult=result3(10,20);
// console.log("final result is : " +finalresult);

// //return value without block
// const result4=(a,b)=>a*b;
// const fresult=result4(30,40);
// console.log("fresukt is: " +fresult);


// //return value without block
// const totalsal=(salary,pf,hra)=>salary-
// pf+hra;
// const total=totalsal(5000,2000,3000);
// console.log("total salary is: " +total);

//  //arrow function with return value
// const totalsalary=(salary,pf,hra)=>{
//     return salary-pf+hra;
// }
// const salary=totalsalary(5000,3000,2000);
// console.log("total salary is : " +salary);

const totalsalary=(basic,pf,hra)=>basic-pf+hra;
