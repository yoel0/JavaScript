/* hasDuplicates, Javascript, Array
* Checks if there are duplicate values in a flat array.
*
* 1. Use Set() to get the unique values in the array.
* 2. Use Set.prototype.size and Array.prototype.length to
* check if the count of the unique values is the same as elements
* in the original array.
*/

const hasDuplicates = arr => new Set(arr).size !== arr.length;

console.log(hasDuplicates([0, 1, 1, 2]));
console.log(hasDuplicates([0, 1, 2, 3]));

// Returns
// true
// false