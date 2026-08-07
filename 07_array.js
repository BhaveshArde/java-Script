//+++++++++++++++++  Array  ++++++++++++++++++++++++++++++++++++++++++++++

const hero=["spiderman","batman","ironman"];
const marvel_hero=["thor", "black panther","antman"];
console.log(hero[0 ,2]);
let arr=new Array(1,2,3,4,5);
console.log(arr);

//++++++++++++++++  Methods  ++++++++++++++++++++++++++++++++++++++++++++++

arr.push(6); // add in last
arr.pop();   //remove last element
arr.reverse();  //revrse array
arr.unshift(9);  //add on first
arr.shift();   //remove on first


const newArr=arr.join()  //join array also make a string
console.log(newArr);

console.log(arr.splice(1,1));  //it delete item from starting element 
console.log(arr.slice(1,4));  //make new array
const my_hero=marvel_hero.concat(hero);
console.log(my_hero);   //make combine array but in array format 

console.log(my_hero.flat(Infinity));  // it gives one array which reduce array inside array
console.log(Array.from("Bhavesh"));  //gives new array o/p=[b,h,a,v,e,s,h]
