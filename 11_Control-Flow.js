//++++++++++++++++++++  if-else/if  ++++++++++++++++++++++++++


if(true){                //always run because value is "true"
    console.log("hello");
}



if(10>=8){
    console.log("10 is greter than 8");
    
}else{
    console.log("8 is greter than 10");
    
} 

//>,<,<=,>=,== basic result
//"===,!==,>==,<==" it was strict chack the datatype also
//2=="2" o/p "true" ........  2==="2"  o/p "false"

let temprature=45;
if (temprature==="45"){
    console.log("executed"); 
}else{
    console.log("not executed");
}               // o/p = executed


if (true){
    let z=51*98;
    console.log(z);
}
// console.log(z);          // that z was local levelscope or if level scope 

//+++++++++++++++ Nested If-Else  ++++++++++++++++++++++++++++

let marks = 98
if(marks>45){
    if(marks>55 && marks<75){
        console.log("B grade");
    }else if (marks>75){
        console.log("A grade");
    }else if(marks){
        console.log("excelent");
        
    }
}else{
    console.log("fail");
}

// ++++++++++++++++++++++++++++++ Switch ++++++++++++++++++++++++
// syntax


/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/


let day=5
switch (day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wensday");
        break;
    case 4:
        console.log("thusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("wrong value");
        
}


// falsy values(false,0,-0,Nan,"",bigInt 0n,undefine)
// remaining all vlaues are true

//ternary operater
let x=100;
x==100? console.log(x):console.log("0");

