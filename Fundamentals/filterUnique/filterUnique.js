/* filterUnique, Javascript, Array
* Creates an array with the unique values filtered out.
*
* 1. Use new Set() and the spread operator (...) to create 
* an array of the unique values in arr.
* 2. Use Array.prototype.filter() to create an array containing 
* only the non-unique values.
*/

const danceWithUniques = array =>
  [...new Set(array)].filter(i => array.indexOf(i) !== array.lastIndexOf(i));

console.log(danceWithUniques([1, 2, 2, 3, 4, 4, 5]));

// Returns
// [ 2, 4 ]