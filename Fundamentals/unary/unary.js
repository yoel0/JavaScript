/* unary, Javascript, Function
* Creates a function that accepts up to one argument, ignoring any additional arguments.
*
* 1. Call the provided function, fn, with just the first argument supplied.
*/

const unaryLaw = fn => val => fn(val);

console.log(['7', '7', '0'].map(unaryLaw(parseInt)));

// Returns 
// [ 7, 7, 0 ]
