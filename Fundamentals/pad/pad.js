/* pad, Javascript, String
* Pads a string on both sides with the specified character,
* if it's shorter than the specified length.
*
* 1. Use String.prototype.padStart() and String.prototype.padEnd()
* to pad both sides of the given string.
* 2. Omit the third argument, char, to use the whitespace character
* as the default padding character.
*/

const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);

console.log(pad('dog', 10));
console.log(pad(String(77), 6, '🔥'));

// Returns
// dog    -> wif da pad pad
// 🔥77🔥 -> wif da pad pad, emojis take up 2 spaces.