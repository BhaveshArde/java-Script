//++++++++++++++  this  +++++++++++++++++++++++++++
let obj={
    username:"bhavesh",
    prize:500,
    endMsg:function(){
        console.log(`${this.username} , welcome in my website`);
    }   //"this" it used for accesing the current object content 
}

obj.endMsg();          // o/p "bhavesh , welcome in my website"
obj.username="prathamesh";  //overwrite the value of the username
obj.endMsg()          // o/p "prathamesh , welcome in my website"

// "this" it is used in only class and object because they gives the containt inside them 

//+++++++++++++++  arrow_function  ++++++++++++++++
//syntax

/* 


let variableName = ()=>{
    
    //code of an function
    
    }


//functionCalling
variableName(); 


*/

let add =(num1,num2)=>{
    console.log(num1+num2)
}

add(55,98)


//++++++++++++++ Implicite Function  ++++++++++++++++

let sub=(n1,n2)=>(console.log(n1-n2))
sub(88,65);       // that is used to reduce code make compact code

//syntax
// let varibaleName = (para)=>(code for execution);

//calling function:
//varibaleName(para);         

//example
let myArr=[1,2,3,4,5,6,7];
myArr.forEach((values)=>{
    console.log(values," ");
});

// ++++++++++ Immediate Invoke Function ++++++++++++
//it used to invoke direclty 
//ex-1
(function(){
  console.log(55*8);
})();

//ex-2
(()=>{
    console.log(99/3);
})();

