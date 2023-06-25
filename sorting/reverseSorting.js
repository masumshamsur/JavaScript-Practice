
var str="Shamsur Rahman Masum";


const reverseAstring=(str)=>{
    var rStr="";
    for(var i in str){
        rStr= str[i]+rStr;
    }
    return rStr;
}

console.log(reverseAstring(str));