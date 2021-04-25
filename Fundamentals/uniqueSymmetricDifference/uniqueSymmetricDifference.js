/* uniqueSymmetricDifference, Javascript, Array, Math
 * Returns the unique symmetric difference between two arrays,
 * not containing duplicate values from either array.
 *
 * 1. Use Array.prototype.filter() and Array.prototype.includes()
 * on each array to remove values contained in the other.
 * 2. Create a new Set() from the results, removing duplicate values.
 */

const uniqueSymmetricDifference = (ayy, bae) => [
	...new Set([
		...ayy.filter(v => !bae.includes(v)),
		...bae.filter(v => !ayy.includes(v)),
	]),
];

console.log(uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]));
console.log(uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]));

// Returns
// [ 3, 4 ]
// [ 2, 3 ]
