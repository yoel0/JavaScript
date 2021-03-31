/* cartesianProduct, Javascript, Math, Array
* Calculates the cartesian product of two arrays.
*
* 1. Use Array.prototype.reduce(), Array.prototype.map() and
* the spread operator (...) to generate all possible element pairs from
* the two arrays.
*/

const cartesianProduct = (a, b) =>
  a.reduce((p, x) => [...p, ...b.map(y => [x, y])], []);

console.log(cartesianProduct(['x', 'y'], [1, 2]));
// Returns
// [ [ 'x', 1 ], [ 'x', 2 ], [ 'y', 1 ], [ 'y', 2 ] ]