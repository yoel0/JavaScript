/* extendHex, Javascript, String
* Extends a 3-digit color code to a 6-digit color code.
*
* 1. Use Array.prototype.map(), String.prototype.split() and
* Array.prototype.join() to join the mapped array for converting
* a 3-digit RGB notated hexadecimal color-code to the 6-digit form.
* 2. Array.prototype.slice() is used to remove # from string start
* since it's added once.
*/

const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(extendHex('#fff'));
console.log(extendHex('000'));

// Returns
// #ffffff
// #000000