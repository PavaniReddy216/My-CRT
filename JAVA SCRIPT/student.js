const rollnumber=6;
const name="pavani";
let sub1=50;
let sub2=60;
let sub3=70;
let sub4=80;
let sub5=90;
const total=sub1+sub2+sub3+sub4+sub5;
console.log("total marks:"+sub1+sub2+sub3+sub4+sub5);


const avg= total/5;
console.log("avg marks are"+(total/5));


if(avg>75)
{
    console.log("grade a");
}
else((avg>60)&&(avg<75))
{
    console.log("grade b");
}
