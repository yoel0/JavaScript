/* includesAll, Javascript, Array
* Checks if all the elements in values are included in arr.
*
* 1. Use Array.prototype.every() and Array.prototype.includes()
* to check if all elements of values are included in arr.
*/

const includesAll = (array, values) =>
  values.every(v => array.includes(v));

console.log(includesAll([1, 2, 3, 4], [1, 4]));
console.log(includesAll([1, 2, 3, 4], [1, 5]));

// Returns
// true
// false