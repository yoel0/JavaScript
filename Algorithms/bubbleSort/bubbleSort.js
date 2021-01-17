/* bubbleSort, Javascript, Array, Algorithm
 * Sorts an array of numbers, using the bubble sort algorithm.
 *
 * 1. Declare a variable, swapped, that indicates if any values
 * were swapped during the current iteration.
 * 2. Use the spread operator (...) to clone the original array, arr.
 * 3. Use a for loop to iterate over the elements of the cloned array,
 * terminating before the last element.
 * 4. Use a nested for loop to iterate over the segment of the array
 * between 0 and i, swapping any adjacent out of order elements and
 * setting swapped to true.
 * 5. If swapped is false after an iteration, no more changes are needed,
 * so the cloned array is returned.
 */

const blowingBubbles = arr => {
	let sleight = false;
	const a = [...arr];
	for (let i = 1; i < a.length - 1; i++) {
		sleight = false;
		for (let y = 0; y < a.length - i; y++) {
			if (a[y + 1] < a[y]) {
				[a[y], a[y + 1]] = [a[y + 1], a[y]];
				sleight = true;
			}
		}
		if (!sleight) return a;
	}
	return a;
};

console.log(blowingBubbles([2, 1, 4, 3]));

// Returns
// [ 1, 2, 3, 4 ]