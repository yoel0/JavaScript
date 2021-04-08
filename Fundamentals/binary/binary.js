/* binary, Javascript, Function
* Creates a function that accepts up to two arguments,
* ignoring any additional arguments.
*
* 1. Call the provided function, fn, with the first two arguments given.
*/

const binary = fn => (a, b) => fn(a, b);

console.log(['2', '1', '0'].map(binary(Math.max)));

// Returns
// [ 2, 1, 2 ]