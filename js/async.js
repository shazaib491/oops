// // // passing a function as an argument to another fucntion is known as callback function

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


function myDisplayer(some) {
    console.log(some)
    document.getElementById("demo").innerHTML = some;
  }
  
  function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(this.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer);