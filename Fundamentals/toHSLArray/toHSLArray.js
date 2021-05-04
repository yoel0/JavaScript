/* toHSLArray, Javascript, String, Browser, Regexp
* Converts an hsl() color string to an array of values.
*
* 1. Use String.prototype.match() to get an array of 3 string with
* the numeric values.
* 2. Use Array.prototype.map() in combination with Number to convert
* them into an array of numeric values.
*/

const toHSLArray = hslString => hslString.match(/\d+/g).map(Number);

console.log(toHSLArray('hsl(50, 10%, 10%'));

// Returns
// [ 50, 10, 10 ]