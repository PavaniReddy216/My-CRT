//to assign grade to student

// const rollnumber=6;
// const name="pavani";
// let sub1=50;
// let sub2=60;
// let sub3=70;
// let sub4=80;
// let sub5=90;
// const total=sub1+sub2+sub3+sub4+sub5;
// console.log("total marks:"+sub1+sub2+sub3+sub4+sub5);


// const avg= total/5;
// console.log("avg marks are"+(total/5));


// if(avg>75)
// {
//     console.log("grade a");
// }
// else((avg>60)&&(avg<75))
// {
//     console.log("grade b");
// }









// let day;   //print today using switchcase
// switch(new Date().getDay())       // new date=object

// {                                 //getday=method
//     case 0:
//         day="sunday";
//         break;
    
//     case 1:
//         day="monday";
//         break;
    
//     case 2:
//         day="tuesday";
//         break;
        
//     case 3:
//         day="wednesday";
//         break;
           

//     case 4:
//         day="thursday";
//         break;
    

//     case 5:
//         day="friday";
//         break;


//     case 6:
//         day="saturday";
//         break;
// }
// console.log(day);





// //grade using switch
// const rollnumber=6;
// const name="pavani";
// let sub1=90;
// let sub2=80;
// let sub3=70;
// let sub4=80;
// let sub5=90;
// const total=sub1+sub2+sub3+sub4+sub5;
// console.log("total marks:"+sub1+sub2+sub3+sub4+sub5);
// const avg= total/5;
// console.log("avg marks are " +(avg));
// switch(true)
// {
//     case (avg>75):
//         console.log ("grade A");
//         break;
    
//     case ((avg>60)&&(avg<75)):
//         console.log ("grade B");
//         break;
// }







let avg=10;
switch(true)
{
    case (avg>75):
        console.log ("grade A");
        break;
    
    case ((avg>=60)&&(avg<75)):
        console.log ("grade B");
        break;
    case((avg<60)&&(avg>35)):
        console.log("grade c");
        break;
    default:
        console.log("not eligible")
}