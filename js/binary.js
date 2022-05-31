function  binarySearch(arr,element){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(element < arr[mid]){
            end=mid-1;
        }else if(element > arr[mid]){
            start=mid+1
        }else{
            return mid;
        }
        
    }
    return -1
}


let arr=[1,2,3,4,5];
let num=binarySearch(arr,5)
console.log(num)