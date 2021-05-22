/* negate, Javascript, Function
* Negates a predicate function.
*
* 1. Take a predicate function and apply the not operator (!)
* to it with its arguments.
*/

const negate = func => (...args) => !func(...args);

console.log(
  [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0))
);


// Returns
// [ 1, 3, 5 ]