/* mapString, Javascript, String
* Creates a new string with the results of calling a provided function 
* on every character in the given string.
*
* 1. Use String.prototype.split('') and Array.prototype.map() to 
* call the provided function, fn, for each character in str.
* 2. Use Array.prototype.join('') to recombine the array of 
* characters into a string.
* 3. The callback function, fn, takes three arguments 
* (the current character, the index of the current character and 
* the string mapString was called upon).
*/

const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

console.log(mapString('castlevania', c => c.toUpperCase()));

// Returns
// CASTLEVANIA