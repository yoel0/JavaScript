/* logBase, Javascript, Math
* Calculates the logarithm of the given number in the given base.
*
* 1. Use Math.log() to get the logarithm from the value and the base and divide them.
*/

const logBase = (n, base) => Math.log(n) / Math.log(base);

console.log(logBase(10, 10));
console.log(logBase(100, 10));

// Returns
// 1
// 2