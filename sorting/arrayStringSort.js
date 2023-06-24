const fruits=['apple', 'orange', 'banana', 'mango', 'chreey']
//console.log("original array- "+fruits)

//console.log('sorted array- '+fruits.sort())

//console.log(fruits.reverse())

const sortArray=(arr)=>{

    var tmp=[];
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[i]>arr[j]){        //to sort reverse order (arr[i]<arr[j])
                tmp=arr[i];
                arr[i]=arr[j];
                arr[j]=tmp
            }
        }
    }
    return arr;

}
console.log(sortArray(fruits))