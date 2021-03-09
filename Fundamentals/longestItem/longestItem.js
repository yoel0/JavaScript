/* longestItem, Javascript, Array
* Takes any number of iterable objects or objects with 
* a length property and returns the longest one.
*
* 1. Use Array.prototype.reduce(), comparing 
* the length of objects to find the longest one.
* 2. If multiple objects have the same length, the first 
* one will be returned.
* 3. Returns undefined if no arguments are provided.
*/

const longestItem = (...values) =>
  values.reduce((a, x) => (x.length > a.length ? x : a));

console.log(longestItem([1, 2, 3], 'FORGLORY'));

// Returns
// FORGLORY