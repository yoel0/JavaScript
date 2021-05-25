/* indexOfAll, Javascript, Array
* Finds all indexes of val in an array. If val never occurs,
* returns an empty array.
*
* 1. Use Array.prototype.reduce() to loop over elements and store
* indexes for matching elements.
*/

const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

console.log(indexOfAll([1, 2, 3, 3, 2, 1], 2));
console.log(indexOfAll([1, 2], 3));

// Returns
// [ 1, 4 ]
// []