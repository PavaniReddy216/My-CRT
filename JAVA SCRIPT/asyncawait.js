//user payment
const didpayment=true;
const payment=async() =>{
    try{
        if(didpayment){
            console.log("payment sucess")
        }
    }
    catch(err){
        console.log("some error")
    }
}
payment()