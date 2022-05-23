// global execution context
// console.log(this)


// function myfunction(){
//     console.log(this)
// }

// myfunction()


// console.log(this==window)

// let obj={
//     name:"admin",
//     cls:12,
//     display:()=>{
//         console.log(this)
//     }
// }

// obj.display()

// function display(name,cls){
//     this.name=name
//     this.class=cls
//     this.setName=(name)=>{
//         this.name=name
//     }

//     function showName(){
//         console.log(this.name,this.class)
//     }
//     }
// // parent object
// let obj=new display("admin","12th");
// // child object
// let obj2=new display("akash","12th");

// obj.showName.call(obj2);


// a=10
"use strict"

function display(){
    "use strict";
    console.log(this)
    

}


display()






// promise json fetch 

// console.log(_.sortedIndex([10, 20, 30, 50], 40));
// let student=[
//     {
//         name:'admin',
//         email:"admin@example.com",
//         hindi:100,
//         english:90,
//         math:20
//     },
//     {
//         name:'shazab',
//         email:"admin@example.com",
//         hindi:50,
//         english:90,
//         math:20
//     }
// ]


// let arr=_.uniqBy(student,'math');
// console.log(arr);

let count=_.countBy([6.1, 4.2, 6.3],Math.floor);
console.log(count)

var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
let jrr= _.every(users,  { 'user': 'barney', 'age': 36, 'active': false },
{ 'user': 'fred',   'age': 40, 'active': false });
console.log(jrr)