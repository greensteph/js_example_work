// Challenge:
// Write a function called "countAllCharacters".
// Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
// Notes:  
  // If given an empty string, countAllCharacters should return an empty object.


// pseudocode:
// if the string is empty, return an empty object
// input: string of characters
// intialize a result object
// loop through the string
    // if the item does not exist in the object
        // create it and set it to 1
        // otherwise if it does exist, increment it by 1
// output: an object with the number of occurances of each letter

function countAllCharacters(str) {
if(str.length === 0){
    return {};
}
var resultObj = {};
for(var i = 0; i < str.length; i++){
    var currentChar = str[i];
    if(resultObj[currentChar] === undefined){
        resultObj[currentChar] = 1;
    } else {
        resultObj[currentChar]++;
    }
}
return resultObj;
}



// test case:
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}