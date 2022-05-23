// [[1,2,3],[3,2,1]]
const arr=  [[2,8,7],[7,1,3],[1,9,5]];
let max_value=0;
let s=0;
for (let i=0; i<arr.length; i++){
    s=0;
    for (let j=0; j<arr[i].length; j++){
        s+=arr[i][j];
    }
    if(s >  max_value){
        max_value=s;
    }
}

console.log(max_value);