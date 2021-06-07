/* padNumber, Javascript, String, Math
* Pads a given number to the specified length.
*
* 1. Use String.prototype.padStart() to pad the number
* to specified length, after converting it to a string.
*/

const padNumber = (n, l) => `${n}`.padStart(l, '0');

console.log(
  padNumber(1234, 5),
  'LELELELELE!!!!!!!'
);

// Returns
// 01234 LELELELELE!!!!!!!