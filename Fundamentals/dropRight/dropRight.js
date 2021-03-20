/* dropRight, Javascript, Array
* Creates a new array with n elements removed from the right.
*
* 1. Use Array.prototype.slice() to remove the specified
* number of elements from the right.
* 2. Omit the last argument, n, to use a default value of 1.
*/

const dropRight = (a, n = 1) => a.slice(0, -n);

console.log(dropRight([1, 2, 3]));
console.log(dropRight([7, 7, 7, 6, 6, 6], 3));

// Returns
// [ 1, 2 ]
// [ 7, 7, 7 ]