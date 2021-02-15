/* functionName, Javascript, Function
* Logs the name of a function.
*
* 1. Use console.debug() and the name property of the passed function to log 
* the function's name to the debug channel of the console.
* 2. Return the given function fn.
*/

const functionName = fn => (console.debug(fn.name), fn);

let m = console.log(functionName(Math.max) (5, 10));

// Returns
// max
// 10
