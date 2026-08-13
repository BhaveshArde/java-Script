//for loop
for(let i=0;i<=10;i++){
    console.log(i);
    if (i==5){
        console.log("That is '5'");
    }
}  // it gives all element one by one 

for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        console.log(`inner loop ${i} outer loop ${j}`);
        
    }
}           // loop within loop "j" run "i" times

let myArray=["ironman","batman","spiderman","antman","thor","captain"];
myArray.forEach((value)=>{
    console.log(value);
})

//while loop
let index=0;
while(index<4){
    console.log(index);
    index++;
}           // same like as for but that is unique

//do while loop
do{
    console.log(index);
    index++;
}while(index<10);     // it run at a time must or always 
