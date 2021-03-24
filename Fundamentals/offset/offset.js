/* offset, Javascript, Array
* Moves the specified amount of elements to the end of the array.
*
* 1. Use Array.prototype.slice() twice to get the elements after
* the specified index and the elements before that.
* 2. Use the spread operator (...) to combine the two into one array.
* 3. If offset is negative, the elements will be moved from end to start.
*/

const offset = (a, offset) => [...a.slice(offset), ...a.slice(0, offset)];

console.log(offset([3, 4, 5, 1, 2], 3));
console.log(offset([1, 2, 3, 4, 5], -3));

// Returns
// [ 1, 2, 3, 4, 5 ]
// [ 3, 4, 5, 1, 2 ]