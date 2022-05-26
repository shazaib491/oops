// // global execution context
// // console.log(this)


// // function myfunction(){
// //     console.log(this)
// // }

// // myfunction()


// // console.log(this==window)

// // let obj={
// //     name:"admin",
// //     cls:12,
// //     display:()=>{
// //         console.log(this)
// //     }
// // }

// // obj.display()

// // function display(name,cls){
// //     this.name=name
// //     this.class=cls
// //     this.setName=(name)=>{
// //         this.name=name
// //     }

// //     function showName(){
// //         console.log(this.name,this.class)
// //     }
// //     }
// // // parent object
// // let obj=new display("admin","12th");
// // // child object
// // let obj2=new display("akash","12th");

// // obj.showName.call(obj2);


// // a=10
// "use strict"

// function display(){
//     "use strict";
//     console.log(this)
    

// }


// display()






// // promise json fetch 

// // console.log(_.sortedIndex([10, 20, 30, 50], 40));
// // let student=[
// //     {
// //         name:'admin',
// //         email:"admin@example.com",
// //         hindi:100,
// //         english:90,
// //         math:20
// //     },
// //     {
// //         name:'shazab',
// //         email:"admin@example.com",
// //         hindi:50,
// //         english:90,
// //         math:20
// //     }
// // ]


// // let arr=_.uniqBy(student,'math');
// // console.log(arr);

// let count=_.countBy([6.1, 4.2, 6.3],Math.floor);
// console.log(count)

// var users = [
//     { 'user': 'barney', 'age': 36, 'active': false },
//     { 'user': 'fred',   'age': 40, 'active': false }
//   ];
// let jrr= _.every(users,  { 'user': 'barney', 'age': 36, 'active': false },
// { 'user': 'fred',   'age': 40, 'active': false });
// console.log(jrr)


// naman
// naman
// let str="shazaib";
// console.log(str.split(""))
// console.log(str.split("").reverse())
// console.log()
// let revStr=str.split("").reverse().join("");
// console.log(revStr)

// if(str===revStr){
//     console.log("Palindrome Stirng")
// }else{
//     console.log("Not P")
// }

// shazaib 
// naman  naman
// let str="12345";
// let rev=str.split("").reverse().join("")
// str=str.split("").reverse().map((element)=>+element);
// console.log(str)

// console.log((str===rev)?"palindrome":"not palindrome")


// json javascript object notation
// javascript object notation
// let user=[{
//     name:"admin",
//     email:"admin@gmail.com",
//     mobile:12345678
// }]

// data kahi per send krne k liye koise lang me c c++ python java
// object to string
// let add=JSON.stringify(user);
// console.log(add)

// another server data json javascript object me convert krna he 
// string to object 
// let convertedData=JSON.parse(add);
// console.log(convertedData)

// localStorage.setItem("userInfo",add);
// localStorage.setItem("name","shazaib");
// localStorage.setItem("age","17");
// localStorage.setItem("Branch","MCA");
// key : value

// let localStorageData=localStorage.getItem("userInfo");
// console.log(JSON.parse(localStorageData))


// let removeItem=localStorage.removeItem("userInfo")
// localStorage.clear()


// const User=new Promise((resolve,reject)=>{
//     let age=18;
//     setTimeout(()=>{
//         if(age>=18){
//             resolve("promise resolve")
//         }else{
//             // reject("reject you are not eligibile")
//             return Promise.reject("reject you are not eligibile")
//         }
//     },1000)
   
// })

// User.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })
// let resolution= new Promise((resolve,reject)=>{
//     let flag=false;
//     if(flag){
//         resolve("Data feteched")
//     }else{
//         reject("Data reject");
//     }
// })

// resolution.then((resolve)=>{
//     console.log(resolve)
// }).catch((error)=>{
//     console.log(error);
// })




// const req=new XMLHttpRequest();
// req.open("filename.txt",()=>{

// })

// function getFile() {
//   let req = new XMLHttpRequest();
//   req.open('GET', "./index.txt");
//   req.onload = function() {
//     if (req.status == 200) {
//         console.log(this.responseText)
//     } else {
//         console.log(this.responseText)

//     }
//   }
//   req.send();
// }

// getFile()
let todo={
      title: "json-server",
      author: "rishubh"
}

// fetch("http://localhost:3000/comments").then((response)=>{
//     console.log(response)
//     response.json().then((data)=>{
//         console.log(data)
//     })
// }).catch(error=>{
//     console.log(error);
// })

getDataFromServer=()=>{
    fetch("http://localhost:3000/posts",{
        method:"POST",
        body:JSON.stringify(todo),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
    }).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
        })
    }).catch(error=>{
        console.log(error)
    })
}

// getDataFromServer()


fetch("http://localhost:3000/posts/7",{
    method:"DELETE"
}).then((data)=>{
    console.log(data)
})