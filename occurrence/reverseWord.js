
// this exercise is about reverseing words in a string


const str = "Hi how are you";

let spStr= str.split(' ');  // put each word in an array

console.log(spStr);

spStr = spStr.map(word =>word.split('').reverse().join(''));  //// for each word, we put each letter in array, reverse them and then re-join them

spStr = spStr.join(' ');  // rejoin the word

console.log(spStr);