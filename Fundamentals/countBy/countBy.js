/* countBy, Javascript, Array, Object
 * Groups the elements of an array based on the given function and returns
 * the count of elements in each group.
 *
 * 1. Use Array.prototype.map() to map the values of an array to a function
 * or property name.
 * 2. Use Array.prototype.reduce() to create an object, where the keys are
 * produced from the mapped results.
 */

// WE ARE INFINITE.
const countBy = (arr, fn) =>
	arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
		acc[val] = (acc[val] || 0) + 1;
		return acc;
	}, {});

console.log(countBy([1.1, 1.2, 2.3], Math.floor));
console.log(countBy(['four', 'five', 'six'], 'length'));
console.log(countBy([{ count: 10 }, { count: 20 }, { count: 10 }], x => x.count));

// Returns
// { '1': 2, '2': 1 }
// { '3': 1, '4': 2 }
// { '10': 2, '20': 1 }