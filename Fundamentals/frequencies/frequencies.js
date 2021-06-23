/* frequencies, Javascript, Array, Object
 * Creates an object with the unique values of an array as keys
 * and their frequencies as the values.
 *
 * 1. Use Array.prototype.reduce() to map unique values to an object's keys,
 * adding to existing keys every time the same value is encountered.
 */

const frequencies = arr =>
	arr.reduce((a, v) => {
		a[v] = a[v] ? a[v] + 1 : 1;
		return a;
	}, {});

console.log(frequencies(['a', 'b', 'c', 'b', 'a', 'a']));
console.log(frequencies([...'yoelyoyo']));

// Returns
// { a: 3, b: 2, c: 1 }
// { y: 3, o: 3, e: 1, l: 1 }