//singlton
const tinderObj=new Object();
tinderObj.name="bhavesh";
tinderObj.id=11;
tinderObj.email="abc@email.com";



//object literal

const sym=Symbol("key1");
const obj={
    name:"bhavesh",
    age:20,
    email:"abcemail.com",
    [sym]:"key1"         // add symbol in the object 
}
console.log(obj["name"]);
console.log(obj[sym]);

obj.fun=function(){
    console.log(`Hello friend, I am ${this.name}`)
}   // add new key in obj "fun"
  // {this} shows the object inside keys

//object inside object
let nestobj={
    fullName:{
        firstName:"bhavesh",
        middleName:"Vilas",
        lastname:"Arde"
    }                     //Nested Object
}

console.log(nestobj.fullName.lastname);    //access the object


//combine aobject
let obj3={...obj,...tinderObj};

let api;
api.fetch("https://dog.ceo/api/breeds/image/random");
api.json()
console.log(api);