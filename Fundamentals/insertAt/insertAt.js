/* insertAt, Javascript, Array
* Mutates the original array to insert 
* the given values after the specified index.
*
* 1. Use Array.prototype.splice() with 
* an appropriate index and a delete count of 0, 
* spreading the given values to be inserted.
*/

const squeezeMe = (arr, i, ...v) => {
  arr.splice(i + 1, 0, ...v);
  return arr;
};

let myArray = [1, 2, 3, 4];

console.log(squeezeMe(myArray, 2, 5));

// Returns 
// [ 1, 2, 3, 5, 4 ]