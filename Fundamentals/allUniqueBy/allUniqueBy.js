/* allUniqueBy, Javascript, Array
 * Checks if all elements in an array are unique, based on the provided
 * mapping function.
 *
 * 1. Use Array.prototype.map() to apply fn to all elements in arr.
 * 2. Create a new Set from the mapped values to keep only unique occurrences.
 * 3. Use Array.prototype.length and Set.prototype.size to compare the length
 * of the unique mapped values to the original array.
 */

const allUniqueBy = (arr, fn) => arr.length === new Set(arr.map(fn)).size;

console.log(allUniqueBy([1.2, 2.4, 2.9], Math.round));
console.log(allUniqueBy([1.2, 2.3, 2.4], Math.round));

// Returns
// true
// false