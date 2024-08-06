//ways to create array
// //literal name
const stunames=["mythili","nandu","pavani","myna","jyothi","fathima"]
// //object names
const enames=new Array("likitha","brunda","anu")
// console.log(stunames,enames)
// //recommended is literal syntax
// //to retrive all the elements use for-of

// for(let sname of stunames){
//     console.log(sname)
// }


// //forEach() method
// //call back methods
// stunames.forEach((value)=>
// {
//     console.log(value)
// })

// //add elements into the array
// //by using push 
// stunames.push("anu")
// console.log(stunames)

// //to push for starting position use unshift
// stunames.unshift("sailu")
// console.log(stunames)

// //add elements in middle of the array using splice
// stunames.splice(3,0,"geetha","siva")
// stunames.splice(4,2)
// console.log(stunames)



// //replace the element
// stunames.splice(3,0,"abhi")
// console.log(stunames)


// //to remove element
// stunames.pop()
// console.log(stunames)

// //to remove from particular place
// stunames.shift("sailu");
// console.log(stunames)

// //delete -->delete from element value but not element
// //delete stunames[2]
// //console.log(stunames)

// //replace
// stunames[3]="pavani"
// console.log(stunames)

// //sort
// console.log(stunames.sort())

// //reverse
// console.log(stunames.reverse())

// //portion of an array
// //slice()
// console.log(stunames.slice(0))

// //with starting to ending position
// console.log(stunames.slice(0,6))

// //with negative values
// console.log(stunames.slice(-2,-1))

// //to search specific array element
// //indexof(),lastindexof(),includes()
// console.log(stunames.indexOf("myna"))
// console.log(stunames.lastIndexOf("myna"))
// console.log(stunames.includes("anu"))


// //array methods
// //length
// console.log(stunames.length)
// //array at
// console.log(stunames.at(2))
// //array join
// console.log(stunames.join(" , "))
// //concate
// console.log(stunames.concat(enames))
// //copy within
// console.log(stunames.copyWithin(2,0))
// //flat
// console.log(stunames.flat(0,1))
// //fill
// //console.log(stunames.fill("pavani"))
// //keys
// //console.log(stunames.keys())
// //entries
// //console.log(stunames.entries("pavani"))
// //value of
// console.log(stunames.valueOf(2))
// //with
// console.log(stunames.with(0,"nandu"))
// //value
// //console.log(stunames.values("pavani"))
// //tosorted
// console.log(stunames.toSorted())
// //toreversed
// console.log(stunames.toReversed())
// //tospliced sort
// console.log(stunames.toSpliced(0,1))
// //sorting objects
// console.log(stunames.toString())

