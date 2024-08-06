const empsal=[10000,1000,20000,2000,40000,30000]
console.log(empsal.sort())
//sort is not applicable on numbers

empsal.sort((a,b) =>a-b)
console.log(empsal)

empsal.sort((a,b) => b-a);
console.log(empsal)

//spread operstor(...)(es6 function)