// //ways to creating syntax

// //1.literal syntax
// var myString="welcome to DIET";

// //2.object syntax
var msg=new String("    welcome to mern stack    ");

// //== --> focus on only values
// //=== -->focus on value and references
// console.log(myString==msg);
// console.log(myString===msg);

// const username="admin";
// const password="admin123";
// if(username=="admin" && password=="admin123"){
//     console.log("login succesful")
// }
// else{
//     console.log("login failed")
// }



//how to get length of string
//use length property
// console.log(msg.length);


//how to get portion/pieces of a string
//slice(),substring(),substr()

// console.log(msg.slice(4));
// console.log(msg.slice(0,15));
// console.log(msg.slice(-4,-1));//4-1=3

// console.log(msg.substring(4));
// console.log(msg.substring(0,15));
// console.log(msg.substring(-4,-1));//no negative values are not applicable for substring

// console.log(msg.substr(4));
// console.log(msg.substr(0,15));
// console.log(msg.substr(-4,-1));//strike symbol represents its outdated/legacy

// //+,concat
// console.log(msg.concat("" +msg))

//replce string concept
// console.log(msg.replace("welcome to DIET","hello world"));
// console.log(msg.replace(/welcome to DIET/g,"hello world"));//g is global for i insensitive


//search specific portion index from the string
//indexOf(),lastIndexOf(),Search()
// console.log(msg.indexOf(4))
// console.log(msg.lastIndexOf())
// console.log(msg.search("mern"))


//uppercase
// console.log(msg.toUpperCase());
// //lowercase
// console.log(msg.toLowerCase());
// //trim
// console.log(msg.trim())
// //trimstart
// console.log(msg.trimStart())
// //trimend
// console.log(msg.trimEnd())
// //repeat
// console.log(msg.repeat(3))
// //split
// console.log(msg.split(""))
// //string match
// console.log(msg.match("wel"))

// //string startwith
// console.log(msg.startsWith(" "))
// //string endswith
// console.log(msg.endsWith(" "))
// //charAt
// console.log(msg.charAt(15))
// //charcodeAt-->code of the character
// console.log(msg.charCodeAt(1))
// //at
// console.log(msg.at(15))
// //pad start
// var msg1="7"
// console.log(msg1.padStart(5,"x"))
// //pad stop 
// console.log(msg1.padEnd(5,"x"))
// //includes
// console.log(msg.includes("so"));
// //code pointAt
// console.log(msg.codePointAt(7))
// //value of
// console.log(msg.valueOf("mern"))


//advance javascript(ES6)
const productName = `realmee`;//back-tick
//multiline string
const aboutDiet=`Dhanekula Institute of Engineering and Technology is a private college located in Ganguru, near Vijayawada city in Andhra Pradesh. 
It is affiliated to JNTUK Kakinada.`
console.log(productName,aboutDiet)


//string interpolation
const firstName="pavani"
const lastName="satti"
console.log(`${firstName} ${lastName}`)
