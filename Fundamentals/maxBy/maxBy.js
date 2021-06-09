/* maxBy, Javascript, Math, Array
 * Returns the maximum value of an array, after mapping each element to
 * a value using the provided function.
 *
 * 1. Use Array.prototype.map() to map each element to the value returned by fn.
 * 2. Use Math.max() to get the maximum value.
 */

const maxBy = (arr, fn) =>
	Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

console.log(maxBy([{ n: 5 }, { n: 9 }, { n: 2 }], x => x.n));
console.log(maxBy([{ n: 5 }, { n: 9 }, { n: 2 }], 'n'));

// Returns
// 9
// 9
