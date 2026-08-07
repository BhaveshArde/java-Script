 let no="33";
 console.log(typeof no);
 let transfer=Number(no);
 console.log(typeof transfer);
//     Number 
    // "333" => 333
    // "abc" => NaN
    //true => 1
    // null => 0
    // undefined => NaN

let name="bhavesh";
let boolean=Boolean(name);

/*  Boolean Function
  1 => true 
  0 => false
  "bavesh" => true
  "" =>false
*/
 

//Operations

console.log(10+20);  //30
   //Arithmatic operations (+,-,*,/,%,**,//)

console.log(1 + "2");  // 12 string
console.log("1" + 2 + 2 );  //122 string
console.log( 1 + 2 + "2");  //32 string

console.log(8>9);  //false
   //comparison operator (>,<,>=,<=,==,===,!=,!==) 
console.log(8==="8");  //false check datatype and value

//memory
//stack(primitive){Gives the copy } and heap (Non-primitive){Gives original value}
let name="bhavesh";
let name2=name; 
console.log(name2);    //primitive (copy of original value)
let obj={
  name:"kiran",
  age:22
};   
obj={result:"pass"};
console.log(obj);       // Non-Primitive (Change on original object)