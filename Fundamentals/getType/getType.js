/* getType, Javascript, Type
* Returns the native type of a value.
*
* 1. Return 'undefined' or 'null' if the value is undefined or null.
* 2. Otherwise, use Object.prototype.constructor.name to get the name
* of the constructor.
*/

const getType = v =>
  (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name);

console.log(
  'Essence Extracted:',
  new Set([1, 2, 3])
);

// Returns
// Essence Extracted: Set(3) { 1, 2, 3 }