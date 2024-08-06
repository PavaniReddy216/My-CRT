//user payment
const didpayment=false;
const payment = ()=>{
    console.log("your payment success");
}
const userpayment=(didpayment,callback)=>{
    if(didpayment){
        callback();
    }
    else{
        userpayment();
        if(didpayment){
            callback();
        }
        else{
            userpayment();
        }
    }
}
userpayment(didpayment,payment)