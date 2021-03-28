/* divmod, Javascript, Math
* Returns an array consisting of the quotient and
* remainder of the given numbers.
*
* 1. Use Math.floor() to get the quotient of the division x / y.
* 2. Use the modulo operator (%) to get the remainder of the division x / y.
*/

const divmod = (x, y) => [Math.floor(x / y), x % y];

console.log(divmod(8, 3));
console.log(divmod(3, 8));
console.log(divmod(5, 5));

// Returns
// [ 2, 2 ]
// [ 0, 3 ]
// [ 1, 0 ]