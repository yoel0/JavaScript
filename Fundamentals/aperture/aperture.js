/* aperture, Javascript, Array
 * Creates an array of n-tuples of consecutive elements.
 *
 * 1. Use Array.prototype.slice() and Array.prototype.map()
 * to create an array of appropriate length.
 * 2. Populate the array with n-tuples of consecutive elements from arr.
 * 3. If n is greater than the length of arr, return an empty array.
 */

const breach = (n, arr) =>
	n > arr.length ? [] : arr.slice(n - 1).map((v, i) => arr.slice(i, i + n));

console.log(breach(2, [1, 2, 3, 4]));
console.log(breach(3, [1, 2, 3, 4]));
console.log(breach(5, [1, 2, 3, 4]));

// Returns
// [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ] ]
// [ [ 1, 2, 3 ], [ 2, 3, 4 ] ]
// []
