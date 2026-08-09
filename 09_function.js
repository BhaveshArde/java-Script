//syntax
function functionName(x,y){
    //block of code
    console.log(x+y);
};

//function call
functionName(5,18);

//function with return value
let result;
function mul(a,b){
    result=a*b;
    return result;
}

console.log(mul(88,8));

//rest operator in function
function prize(...value){                 // it gives the value of array
    console.log(value);
}
prize(200,500,900,700,800);          //  o/p [200,500,900,700,800] 

//function using object

let details={
    name:"bhavesh",
    age:20,
    hobbies:["cricket","reading","driving"]
};
function showDetails(anyObj){
    console.log(`hello ${anyObj.name} , nice to meet you . your age is ${anyObj.age} right? and your hobbies are ${anyObj.hobbies} that correct`)
}

showDetails(details);


// function using array
let hero=["ironman","spiderman","thor","hulk"];
function showSecondHero(anyhero){
    return anyhero[2];
}
console.log(showSecondHero(hero));

// arrow function try 
let add=(a,b)=>{
    return a+b;
}
console.log(add(88,98))