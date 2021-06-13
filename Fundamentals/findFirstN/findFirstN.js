/* findFirstN, Javascript, Array
 * Finds the first n elements for which the provided function returns a truthy value.
 *
 * 1. Use a for..in loop to execute the provided matcher for each element of arr.
 * 2. Use Array.prototype.push() to append elements to the results array and
 * return them if its length is equal to n.
 */

const findFirstN = (arr, matcher, n = 1) => {
	let result = [];
	for (let i in arr) {
		const el = arr[i];
		const match = matcher(el, i, arr);
		if (match) result.push(el);
		if (result.length === n) return result;
	}
	return result;
};

console.log(findFirstN([1, 2, 4, 6], n => n % 2 === 0, 2));
console.log(findFirstN([1, 2, 4, 6], n => n % 2 === 0, 5));

// Returns
// [ 2, 4 ]
// [ 2, 4, 6 ]
