/* getMeridiemSuffixOfInteger, Javascript, Date, String
* Converts an integer to a suffixed string, adding am or pm based on its value.
*
* 1. Use the modulo operator (%) and conditional checks to transform an integer 
* to a stringified 12-hour format with meridiem suffix.
*/

const getMeridiemSuffixOfInteger = n =>
  n === 0 || n === 24
    ? 12 + 'am'
    : n === 12
    ? 12 + 'pm'
    : n < 12
    ? (n % 12) + 'am'
    : (n % 12) + 'pm';

console.log(getMeridiemSuffixOfInteger(0));
console.log(getMeridiemSuffixOfInteger(10));
console.log(getMeridiemSuffixOfInteger(13));

// Returns
// 12am
// 10am
// 1pm