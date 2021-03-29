/* compose, Javascript, Function
* Performs right-to-left function composition.
*
* 1. Use Array.prototype.reduce() to perform right-to-left function composition.
* 2. The last (rightmost) function can accept one or more arguments;
* the remaining functions must be unary.
*/

const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => f(g(...args)));

const addFive = x => x + 5;
const multiply = (x, y) => x * y;

const multiplyAndAddFive = compose(
  addFive,
  multiply
);

console.log(multiplyAndAddFive(5, 2));

// Returns
// 15