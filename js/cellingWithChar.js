let cellingWithSorting=(arr,element)=>{
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(element < arr[mid]){
            end=mid-1;
        }else if(element > arr[mid]){
            start=mid+1
        }
        console.log(start)
        
    }
    return start;
}






let arr=['c','f','j'];
// output=c;
let ans=cellingWithSorting(arr,'d');
console.log(arr[ans])