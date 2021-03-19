/* allEqual, Javascript, Array
 * Checks if all elements in an array are equal.
 *
 * 1. Use Array.prototype.every() to check if all the elements of
 * the array are the same as the first one.
 * 2. Elements in the array are compared using the strict comparison operator,
 * which does not account for NaN self-inequality.
 */

const allEqual = array => array.every(value => value === array[0]);

console.log(allEqual([1, 2, 3, 4, 5]));
console.log(allEqual([1, 1, 1, 1, 1]));

// Returns
// false
// true