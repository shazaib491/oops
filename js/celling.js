function  binarySearch(arr,element){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(element == arr[mid]){
            return mid;
        }
        if(element < arr[mid]){
            end=mid-1;
        }else{
            start=mid+1
        }   
    }
    return start;
}


let arr=[1,2,4,5,6];
let num=binarySearch(arr,3)
console.log(num)