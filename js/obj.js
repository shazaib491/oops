// // 
// let name="akashj"
// let cls="12th"
// let subject="english"
// let marks=100;

// // object literal
// // object is a collection key and value pair
// let obj={
//     name:"admin",
//     cls:12,
//     english:100,
//     hindi:80,
//     social:90
// }


// obj.firstname=obj.name;
// delete obj.name;
// // console.log(obj)


// // let renameKey=(keyMap,object)=>{
// //     Object.keys(object).reduce((acc,key)=>({
// //         ...acc,
// //         ...{ [keyMap[key] ]: object[key] },
// //     })),
// //     {}
// // }

    


// let renameKeys = (keysMap, object) =>
// Object.keys(object).reduce(
//   (acc, key) => ({
//     ...acc,
//     ...{ [keysMap[key] || key]: object[key] },
//   }),
  
//   {}
// );

// let result=renameKeys({name:"FirstName"},obj)
// console.log(result)

// // // console.log(obj['name'])
// // for(let i in obj){
// //     console.log(obj[i])
// // }

// const students=[
//     {
//         name:"admin",
//         cls:"12th",
//         english:100
//     },
//     {
//         name:"shazaib",
//         cls:"12th",
//         english:100
//     },
//     {
//         name:"akash",
//         cls:"12th",
//         english:100
//     },
//     {
//         name:"shika",
//         cls:"12th",
//         english:100
//     },
//     {
//         name:"roshni",
//         cls:"12th",
//         english:100
//     }

// ]


// for(let i =0; i<students.length; i++){
//     console.log(students[i]['english'])
// }

// students.forEach((element,index,staticCopy)=>{
//     console.log(element.name)
//     console.log(element.cls)
//     console.log(element.english)
// })



// symbol in js 
let stud={}
let sym1=Symbol("joe");
stud[sym1]=100;
let sym2=Symbol("shazaib");
stud[sym2]=200;

console.log(stud['joe'])







