//array destructing
const empInfo = ["ramesh",30,96868];
const[ename,age,moblienumber] = empInfo;
console.log(ename);
console.log(age);
console.log(moblienumber);

//object destructing
const productInfo = {
    pid:10001,
    pname:"vivo",
    price:10000
}
const{pid,pname,price} = productInfo;
console.log(pid);
console.log(pname);
console.log(price);

//object.assign()
const user = {
    uid:10001,
    uname:"kavya"
}
//cloning
const user1 = Object.assign({},user);
console.log(user1);