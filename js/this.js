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
