/* Digitize, Javascript, Math
* Converts a Number to an Array of digits,
* removing its sign if necessary.
*
* 1. Use Math.abs() to strip the number's sign.
* 2. Convert the number to a String, using the Spread Operator (...)
* to build an Array.
* 3. Use Array.prototype.map() and parseInt() to transform,
* each value to an integer.
*/

const spitDigits = n => [...`${Math.abs(n)}`].map(i =>
  parseInt(i));

  console.log(spitDigits(123456789));
  console.log(spitDigits(-123456789));

/* Returns [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

// Sam Miyakawa's Alternate Solutions
// Alternate
const splitDigits = (n) => Array.from(`${Math.abs(n)}`, Number)
// More Readable Approach
const splitDigits = (n) => Array.from(Math.abs(n).toString(), Number)