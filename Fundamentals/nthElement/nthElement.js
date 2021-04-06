/* nthElement, Javascript, Array
* Returns the nth element of an array.
*
* 1. Use Array.prototype.slice() to get an array containing
* the nth element at the first place.
* 2. If the index is out of bounds, return undefined.
* 3. Omit the second argument, n, to get the first element
* of the array.
*/

const nthElement = (arr, n = 0) =>
  (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];

console.log(nthElement(['a', 'b', 'c'], 1));
console.log(nthElement(['apple', 'boy', 'cabbage'], -3));

// Returns
// b
// apple