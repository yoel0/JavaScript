/* complement, Javascript, Function, Logic
* Returns a function that is the logical complement
* of the given function, fn.
*
* 1. Use the logical not (!) operator on the result
* of calling fn with any supplied args.
*/

const complement = fn => (...args) => !fn(...args);

const isEven = num => num % 2 === 0;
const isOdd = complement(isEven);

console.log(
  isOdd(2),
  isOdd(3),
  "Wether you're a brother or a mother you're STAYING ALIVE.."
);

// Returns
// false true Wether you're a brother or a mother you're STAYING ALIVE..