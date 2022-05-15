
let sm=document.querySelector("#sum");
let sub=document.querySelector("#sub");
let pro=document.querySelector("#pro");
let div=document.querySelector("#div");
let fno=document.querySelector("#fno");
let sno=document.querySelector("#sno");
// let p=document.querySelector("#demo");
let container=document.querySelector(".container");
let allClass=document.getElementsByClassName("demo");

console.log(allClass);
// p.innerHTML=`
//     <h1>Akash is good boy</h1>
// `
// p.setAttribute("class","text-center");
// initialize varible for sum
let sum=0;
let subtraction=0;
let multiply=0;
let division=0;
let =0;
function calcuate(){
    console.log(typeof fno.value)
    sum=+fno.value + +sno.value;
    subtraction=+fno.value - +sno.value;
    multiply=+fno.value * +sno.value;
    division=+fno.value / +sno.value;
    console.log(sum,subtraction,multiply,division)
    sm.innerHTML+=sum;
    sub.innerHTML+=subtraction;
    pro.innerHTML+=multiply;
    div.innerHTML+=division;
}
