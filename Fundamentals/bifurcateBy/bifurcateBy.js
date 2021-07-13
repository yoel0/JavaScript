/* bifurcateBy, Javascript, Array
 * Splits values into two groups, based on the result of the given filtering function.
 *
 * 1. Use Array.prototype.reduce() and Array.prototype.push() to add elements to groups,
 * based on the value returned by fn for each element.
 * 2. If fn returns a truthy value for any element, add it to the first group, otherwise
 * add it to the second group.
 */

const bifurcateBy = (arr, fn) =>
	arr.reduce(
		(acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc),
		[[], []]
	);

console.log(
	bifurcateBy(['beep', 'boop', 'stillyoel', 'bap'], x => x[0] === 'b')
);

// Returns
// [ [ 'beep', 'boop', 'bap' ], [ 'stillyoel' ] ]