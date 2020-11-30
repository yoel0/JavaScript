/* maxN, Javascript, Array, Math
* Returns the n maximum elements from the provided array.
*
* 1. Use Array.prototype.sort() combined with the spread operator (...) 
* to create a shallow clone of the array and sort it in descending order.
* 2. Use Array.prototype.slice() to get the specified number of elements.
* 3. Omit the second argument, n, to get a one-element array.
* 4. If n is greater than or equal to the provided array's length, 
* then return the original array (sorted in descending order).
*/

const maximus = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

console.log(maximus([6, 7, 8]));
console.log(maximus([6, 7, 8], 2));

// Returns
// [ 8 ]
// [ 8, 7 ]