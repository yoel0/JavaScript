/* truncateString, Javascript, String
* Truncates a string up to a specified length.
*
* 1. Determine if String.prototype.length is greater than num.
* 2. Return the string truncated to the desired length, with '...' 
* appended to the end or the original string.
*/

const truncateString = (s, n) =>
  s.length > n ? s.slice(0, n > 3 ? n - 3 : n) + '...' : s;

console.log(truncateString('crocodile', 7));

// Returns
// croc...