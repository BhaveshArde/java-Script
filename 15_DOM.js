//----------------------------------  Document Object Model(DOM)  ------------------------------------------------------
let body=document.querySelector("body"); //access body {class(.) id(#)}
console.log(body);
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li"); //access all list element
li.forEach((value)=>{
    console.log(value);
    value.innerText="hello";    // see content on the given list
    value.style.background="red"; // change the style of content
    value.innerText;
});
let className=document.getElementsByClassName("para");
console.log(className);

let days=document.querySelectorAll(".day");
console.log(days.children);    // gives array of days
for(let i=0;i<days.length;i++){
    console.log(days[i].style.color="orange")
    console.log(days[i].innerText)

}

// add new text using JS in Html
let newpara=document.createElement("p");
newpara.innerText="hello"
newpara.className="newp"
console.log(newpara);
document.body.appendChild(newpara)