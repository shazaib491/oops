
// var a=10;

// function test(){
//   console.log("Hello");
// }

// let black=10;



// setTimeout(()=>{
//   let pureSyn=window.prompt("Enter Your Name")
//   console.log(pureSyn)
// },1000)


// window.alert("Not Directly Connected")

// let response=window.confirm("Do you want to remove record")
// if(response){
//   console.log("Yes")
// }else{
//   console.log("NO")
// }
// function nyfunct(){
//   console.log("Hello world")
// }

// nyfunct()


// regular function anonymous fucntion
// let user=function(a){
//   console.log("Helllo World"+a)
// }

// user("admin")


// // arrow function anonymous fucntion
// let username=(a,b)=>a+b;


// console.log(username(10,20))



// username()

// arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
// arr.forEach((element,index,staticArray)=>{
//   console.log(element)
// })

// // 1 nano second
// console.log("Akash cpudry")


// synocornous function
// async function
// const sum=()=>{
//   console.log(10+20);
// }


// setTimeout(sum,2000);
// console.log("JavaScript is great Language");
// let p=0;
// const product=()=>{
//   let pro=p*p;
//   console.log(pro)
//   p++;
// }
// console.log("Hello rishub")

// setInterval(product,1000)

// console.log("Hello Akash")


// passing a function as an argument to another fucntion is known as 



// // //
// function calculator(num1,num2,callback){
//     let result=num1+num2;
//     callback(result)
// }

// // 3000
// function displaysum(sum){
//     console.log(sum)
// }
// // 300
// calculator(5,5,displaysum);



// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

// // synacromous function
// arr.forEach(element =>{
//     console.log(element);
// })
// console.log("Hello world!");

// // set time
// // async    function
// setTimeout(function(){
// console.log("samreen amreen")
// },5000)


// console.log("Sonali ")
// console.log("Sonali ")
// console.log("Sonali ")
// console.log("Sonali ")
// console.log("Sonali ")
// console.log("Sonali ")
// console.log("Sonali ")

// setInterval(()=>{
//     console.log(":scope .collapse .collapse")
// },1000)





// let name=prompt("Enter Name");
// console.log(name)
// console.log("hELLOK")


// function myDisplayer(some) {
//     console.log(some)
//     document.getElementById("demo").innerHTML = some;
//   }
  
  // function getFile(myCallback) {
  //   let req = new XMLHttpRequest();
  //   req.open('GET', "mycar.html");
  //   req.onload = function() {
  //     if (req.status == 200) {
  //       myCallback(this.responseText);
  //     } else {
  //       myCallback("Error: " + req.status);
  //     }
  //   }
  //   req.send();
  // }
  
  // getFile(myDisplayer);



  function displayRecord(response){
    console.log(response);
  }


  function calculator(a,b,callback){
    let sum=a+b;
    callback(sum);
  }


  calculator(5,5,displayRecord)