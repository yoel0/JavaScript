/* sortCharsInString, Javascript, String
* Alphabetically sorts the characters in a string.
*
* 1. Use the spread operator (...), Array.prototype.sort() and 
* String.prototype.localeCompare() to sort the characters in str.
* 2. Recombine using String.prototype.join('').
*/

const sortCharsInString = string =>
  [...string].sort((a, b) => a.localeCompare(b)).join('');

console.log(sortCharsInString('crabcake'));

// Returns
// aabccekr