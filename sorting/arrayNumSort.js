const num=[11, 40, 89, 44, 51]

const sortArray=(arr)=>{

    var tmp=[];
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){
                tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp
            }
        }
    }
    return arr;
}

console.log(sortArray(num))