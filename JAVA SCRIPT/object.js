const employeeinfo={   //object
    eid:1001,      //property name:value
    ename:"pavani", //key,value
    esal:50000
}
console.log(employeeinfo.eid);
console.log(employeeinfo["eid"]);

//for-in
for(let employee in employeeinfo){
    console.log(employeeinfo[employee]);
}

//object with functions
const personalInfo={
    firstname:"pavani",
    lastname:"reddy",
    fullname:function(){
        return this.firstname+" "+this.lastname;
    }

}
console.log(personalInfo.fullname());  //full name is not a function


//what is this 
//this is a keyword,used to represent current object


//with fat arrow
const personalInfo1={
    firstname:"pavani",
    lastname:"reddy",
    fullname:()=>{
        return this.firstname+" "+this.lastname;
    }

}
console.log(personalInfo1.fullname());  //undefined



//es7
Object.keys(employeeinfo).forEach((key)=>{
    console.log(key +":"+employeeinfo[key])
});


Object.entries(employeeinfo).forEach((entry)=>{
    console.log(entry[0]+":"+entry[1]);

});


Object.values(employeeinfo).forEach((val)=>{
    console.log(val);
});

