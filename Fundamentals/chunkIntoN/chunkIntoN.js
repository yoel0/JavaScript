/* chunkIntoN, Javascript, Array
 * Chunks an array into n smaller arrays.
 *
 * 1. Use Math.ceil() and Array.prototype.length to get the size of each chunk.
 * 2. Use Array.from() to create a new array of size n.
 * 3. Use Array.prototype.slice() to map each element of the new array to a chunk
 * the length of size.
 * 4. If the original array can't be split evenly, the final chunk will contain
 * the remaining elements.
 */

const chunkIntoN = (arr, n) => {
	const size = Math.ceil(arr.length / n);
	return Array.from({ length: n }, (_, i) =>
		arr.slice(i * size, i * size + size)
	);
};

console.log(chunkIntoN([1, 2, 3, 4, 5, 6, 7], 4));

// Returns
// [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7 ] ]