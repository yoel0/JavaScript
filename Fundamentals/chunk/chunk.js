/* chunk, Javascript, Array
 * Chunks an array into smaller arrays of a specified size.
 *
 * 1. Use Array.from() to create a new array,
 * that fits the number of chunks that will be produced.
 * 2. Use Array.prototype.slice() to map each element
 * of the new array to a chunk the length of size.
 * 3. If the original array can't be split evenly,
 * the final chunk will contain the remaining elements.
 */

const chunkyPizza = (arr, size) =>
	Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
		arr.slice(i * size, i * size + size)
	);

console.log(chunkyPizza([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));

// Returns
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
