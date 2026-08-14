// for of loop
//syntax


/*
for (const element of object) {
}
*/ 
//ex
let arr=[1,2,3,4,5,6,7,8,9,0];
for (const value of arr) {
    console.log(value);
    
}

// map (let variableName = new Map()) .... declation
const map=new Map();
map.set("IN","India");
console.log(map);

// for in loop 

const langauge ={
    JS:"javaScript",
    Py:"Python",
    CPP:"C++",
    rb:"Ruby"
}

for(let key in langauge){
    console.log(key ,":->", langauge[key]);
    
}

// for each loop
//syntax
/*
array.forEach(element => {
    
});
*/

//ex
let hero=["ironman","spiderman","batman","flash","captain","black panther"];
hero.forEach((value)=>{
    console.log(value);
    
})

