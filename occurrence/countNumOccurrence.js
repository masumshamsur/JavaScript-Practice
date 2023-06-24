const numArr= [4, 9, 2, 4, 7, 9, 4, 9, 2, 4];

const countOccurrence=(arr)=>{

    var count={};  //blank array object
    for(let i in  arr){
        count[arr[i]]=count[arr[i]]? count[arr[1]]+1 : 1
    }
    
    return count;

}

console.log(countOccurrence(numArr));