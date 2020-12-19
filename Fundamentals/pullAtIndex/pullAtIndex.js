/* pullAtIndex, Javascript, Array
 * Mutates the original array to filter out the values at the specified indexes.
 * Returns the removed elements.
 *
 * 1. Use Array.prototype.filter() and Array.prototype.includes()
 * to pull out the values that are not needed.
 * 2. Set Array.prototype.length to mutate the passed in an array
 * by resetting its length to 0.
 * 3. Use Array.prototype.push() to re-populate it with only the pulled values.
 * 4. Use Array.prototype.push() to keep track of pulled values.
 */

const invokeAtIndex = (arr, invArr) => {
	let purged = [];
	let invoked = arr
		.map((v, i) => (invArr.includes(i) ? purged.push(v) : v))
		.filter((v, i) => !invArr.includes(i));
	arr.length = 0;
	invoked.forEach(v => arr.push(v));
	return purged;
};

let myArray = ['i', 'm', 'i', 's', 's', 'y', 'o', 'u'];
let invoked = invokeAtIndex(myArray, [5, 6, 7]);

console.log(myArray, invoked);

// Returns
// myArray -> [ 'i', 'm', 'i', 's', 's' ]
// invoked -> [ 'y', 'o', 'u' ]
