let arr=[1,4,2,3,4];
let temp=0;
for(let i=0; i<=arr.length-1; i++){
    for(let j=0; j<=arr.length-1; j++){
        if(arr[i] < arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}

console.log(arr)