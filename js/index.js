// DOM
// DOCUMENT OBJECT MODEL

// using id selector which is getElementById
let id=document.getElementById("demo");
console.log(id)
// //overwrite
// id.innerHTML="<h1>Hello Wolrd</h1>"
// // adding dynamically css
// id.style.color="red";
// id.style.backgroundColor="aqua"
// id.style.textAlign="center"
// // using dynamic css it's mendatory to use camelCase

// // innertext or textContent or innerHTML is used to print the text of element
// // innerText or textContent both are same but innerHTML render html not text

// function changeColor(){
//     id.style.color="green";
//     id.style.backgroundColor="red"
//     id.style.textAlign="right"
// }
// using class selector
// getElementByClassName
let className=document.getElementsByClassName("firstClass");
// console.log(className[2].textContent)
className[2].textContent="Hello Akash"


for(let arr of className){
    if(arr.textContent=="Hello Akash")
        arr.style.color="red";
}