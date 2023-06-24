
var str="shamsur rahman masum";


const reverseAstring=(str)=>{
    var rStr="";
    for(var i in str){
        rStr= str[i]+rStr;
    }
    return rStr;
}

console.log(reverseAstring(str));