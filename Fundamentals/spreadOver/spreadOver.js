/* spreadOver, Javascript, Function
* Takes a variadic function and returns a function
* that accepts an array of arguments.
*
* 1. Use a closure and the spread operator (...) to map the
* array of arguments to the inputs of the function.
*/

const spreadOver = fn => argsArray => fn(...argsArray);

const arrayMax = spreadOver(Math.max);

console.log(arrayMax([1, 2, 3, 4, 5, 6, 7, 8]));

// Returns
// 8
