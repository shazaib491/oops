// array is collection of different data type
// [1000,2000,300,4000,5000,6000,7000]


// let dummyArray=[0,1,2,3,4];
// let arr=[1,2,3,4,5];
//1000=[1,2,3,4,5];
// arr[0]=10;
// let jrr="naman";
// 2000=jrr;
// arr=jrr;
// console.log(arr);
// console.log(dummyArray)
// console.log(arr)
// let len=arr.length-1;
// console.log(len-1)
// for(let i=0; i<=len; i++){
//     console.log(arr[i])
// }

// push method is used to add element in last position
// arr.push(100);

// // unshift method is used to add element in start position
// arr.unshift(200);

// // pop and shift
// // pop method is used to remove element in last position
// arr.pop();

// // shift method is used to remove element in first position
// arr.shift();
// console.log(arr)


// const fruits2=["apple","banana","pinapple","strawberry","graps"];
// const fruits3=["apple","banana","pinapple","strawberry","graps"];
// const fruits4=["apple","banana","pinapple","strawberry","graps"];
// console.log(fruits)

// toString function is used to convert array of element in string format in a new array
// let newFruits=fruits.toString();
// // console.log(newFruits)
// let newArrayForFruits=fruits.join(" ")

// console.log(newArrayForFruits)


// concat function is used to merge no of array
// let tarray=fruits.concat(fruits2,fruits3,fruits4);
// console.log(tarray)

// control + /


// splice remove add
// position, count,optional* position
// delete elemet i array 
// fruits.splice(2,0);

// fruits.splice(2,0,"shazaib","akash")
// console.log(fruits)





// for(let i=2; i<fruits.length-1; i++){
    //     console.log(fruits[i])
    // }
    
    // console.log(fruits.slice(2,4))

    // spread operator
    // 1000
    // // 1000
    // // 2000=[];
    // const  fruits2=[...fruits];
    // const  fruits3=[fruits];
    // fruits2[0]="shazaib";
    // console.log(fruits)    
    // console.log(fruits2)    
    // console.log(fruits3)   
    
    // let firstElemt=fruits[0]
    // let secondElemt=fruits[1]
    // let thirdElemt=fruits[2]
    // console.log(firstElemt,secondElemt,thirdElemt)

    // // destructor
    // const [first,second,third]=fruits;
    // console.log(first,second,third)
    

    // find findindex filter 
    // const fruits=["apple","banana","pinapple","strawberry"];
    // let element=fruits.find(function(elem){
    //     if(elem=='shazaib'){
    //         return elem;
    //     }
    // })

    // console.log(element)



// findindex

// const fruits=["apple","banana","pinapple","strawberry"];
//     let akash=fruits.findIndex(function(elem){
//         console.log(elem)
//     })

// console.log(akash)



// fruits.forEach(function(elem){
//     console.log(elem)
// })
// filter foreach map
// // 1000====fruits


// const fruits2=[...fruits];
// fruits2[0]="AkashByNibuWale"
// console.log(fruits)
// console.log(fruits2)


// find foreach filter finIndex map 
// array bind => function(anotherFunction(elem,index)) => 
// elem=banana
// index=0,1,2,3
// staticCopy=


// find  function is used to find particular element its return specific value
// const fruits=["apple","banana","pinapple","strawberry"];
// let findElement=fruits.find(function(element,index,staticCopy){
//     if(element==='banana'){
//         return element;
//     }
// });

// if(findElement){
//     console.log("Banana is available")
// }else{
//     console.log("Banana is unavailable")

// }
    // console.log("Banana is available")

// forEach
//  const fruits=["apple","banana","pinapple","strawberry"];
// fruits.forEach(function(element,index,staticCopy){
//     console.log(element,index,staticCopy)
// })

// findIndex
// const fruits=["apple","banana","pinapple","strawberry"];
// let arrayIndex=fruits.findIndex(function(element,index,staticCopy){
//     if(element==="strawberry")
//         return element
// })

// console.log(arrayIndex)

// map function is used to trasform the value of array its return new array
// const number=[0,1,2,3,4,5];
// let newArr=number.map(function(element,index,statiCopy){
//     if(element==5){
//         return element*10;
//     }
//     return element;
// })

// console.log(newArr)

const number=[0,1,2,3,4,5];

let latestArray=number.filter(function(element,index,staticCopy){
    if(element!=3){ //element value not 3 
        return element;
    }
})

console.log(latestArray)















    

    
    
































