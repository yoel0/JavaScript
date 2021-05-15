/* converge, Javascript, Function
* Accepts a converging function and a list of branching functions
* and returns a function that applies each branching function to the
* arguments and the results of the branching functions are passed as arguments
* to the converging function.
*
* 1. Use Array.prototype.map() and Function.prototype.apply() to apply
* each function to the given arguments.
* 2. Use the spread operator (...) to call converger with the results
* of all other functions.
*/

const converge = (converger, fns) => (...args) =>
  converger(...fns.map(fn => fn.apply(null, args)));

const gimmeDatAvg = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);

console.log(
  'I can ride my bike with no handlebars..',
  'Average:',
  gimmeDatAvg([1, 2, 3, 4, 5, 6])
);


// Returns
// I can ride my bike with no handlebars.. Average: 3.5