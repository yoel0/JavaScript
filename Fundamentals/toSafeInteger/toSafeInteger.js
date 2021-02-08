/* toSafeInteger, Javascript, Math
* Converts a value to a safe integer.
*
* 1. Use Math.max() and Math.min() to find the closest safe value.
* 2. Use Math.round() to convert to an integer.
*/

const toSafeInteger = n =>
  Math.round(
    Math.max(Math.min(n, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER)
  );

console.log('Bring us to Safety: ', toSafeInteger('7.6'));
console.log('Father, protect we whom dare to PROBE: ', toSafeInteger(Infinity));

// Returns
// Bring us to Safety:  8
// Father, protect we whom dare to PROBE:  9007199254740991