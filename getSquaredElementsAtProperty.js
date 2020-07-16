// Challenge:
// Write a function called "getSquaredElementsAtProperty".
// Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.
// Notes:
  // If the array is empty, it should return an empty array.
  // If the property at the given key is not an array, it should return an empty array.
  // If there is no property at the key, it should return an empty array.

// pseudocode: 
// if there's no prop at the key, return []
// if it's not an array, return []
// input: an array of numbers at a given key in an object
// initialize empty return array
// loop through the array at the key in obj
  // square the item
  // add it to the result array
// output: an array with the square of all the array items


function getSquaredElementsAtProperty(obj, key) {
    if(obj[key] === undefined){
        return [];
    }
    if(Array.isArray(obj[key]) === false){
        return [];
    }
  var resultArr = [];
  for(var i = 0; i < obj[key].length; i++){
      var squared = (obj[key][i]) ** 2;
      resultArr.push(squared);
  }
  return resultArr;
}










// test case:
var obj = {
    key: [2, 1, 5]
  };
  var output = getSquaredElementsAtProperty(obj, 'key');
  console.log(output); // --> [4, 1, 25]