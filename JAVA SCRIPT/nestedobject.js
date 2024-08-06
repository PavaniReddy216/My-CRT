// const cart={
//     cartid:2004,
//     cartwithoffers:"10%",
//     products:[
//         {pid:1001,pname:"realmee",price:30000},
//         {pid:1002,pname:"hp",price:50000}
//     ],
//     shippingAddress:{
//         addressLine1:"bhimavaram",
//         addressLine2:"alamuru",
//         postalCode:534126
//     },
//     userInfo:{
//         userId:2002,
//         username:"pavani"
//     }
// }
// console.log(cart.cartid);
// console.log(cart.products[0]);
// console.log(cart.shippingAddress.addressLine1.addressLine2)
//for facebook

//nested object:write objects in object

const facebook={
    fbid:2005,
    postimage:"sample.jpg",
    posttitle:"iam happy",
    Comments:
    [
        {
        cid:111,
        Comment:"super",
        userinfo:{
            userid:1002,
            username:"sita"
            }
        },
        {
        cid:112,
        Comment:"super",
        userinfo:{
            userid:1020,
            username:"geeth"   
            }
        }
    ]
}
