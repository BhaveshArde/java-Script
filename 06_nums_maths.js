//++++++++++++++++++++  Numbers ++++++++++++++++++++++++++++++++++++
let num=500;
const no =new Number(900);    //it gives the official number also it has object 
console.log(no.toFixed(2));   //it gives only 2 decimal value return
console.log(no.toPrecision(4));  //it gives only 4 digit value appropiate value
console.log(no.toString());   //it gives return string
console.log(no.toLocaleString('en-IN'));   // gives proper ans in indian format like (80000= = 80,000)

//++++++++++++++++++++ Maths  ++++++++++++++++++++++++++++++++++++++

console.log(Math)   //its mathes libraly 
console.log(Math.abs(-99));  //it gives positive no
console.log(Math.round(4.9));  //it gives rounded value
console.log(Math.pow(8,78));  //gives power
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1) + min));  // it gives random value in between min and max

