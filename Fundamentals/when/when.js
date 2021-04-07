/* when, Javascript, Function, Logic
* Returns a function that takes one argument and runs a callback
* if it's truthy or returns it if falsy.
*
* 1. Return a function expecting a single value, x, that returns the
* appropriate value based on pred.
*/

const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);

const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);

console.log(doubleEvenNumbers(2));
console.log(doubleEvenNumbers(1));

// Returns
// 4
// 1