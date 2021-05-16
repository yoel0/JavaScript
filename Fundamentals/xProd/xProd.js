/* xProd, Javascript, Array, Math
* Creates a new array out of the two supplied by creating
* each possible pair from the arrays.
*
* 1. Use Array.prototype.reduce(), Array.prototype.map() and
* Array.prototype.concat() to produce every possible pair from
* the elements of the two arrays.
*/

const xProd = (a, b) =>
  a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

console.log(xProd([1, 2], ['a', 'b']));

// Returns
// [ [ 1, 'a' ], [ 1, 'b' ], [ 2, 'a' ], [ 2, 'b' ] ]
