/* deepFlatten, Javascript, Array, Recursion
 * Deep flattens an array.
 *
 * 1. Use recursion.
 * 2. Use Array.prototype.concat() with an empty array ([])
 * and the spread operator (...) to flatten an array.
 * 3. Recursively flatten each element that is an array.
 */

const hammerToAnvil = arr =>
  [].concat(...arr.map(SMASH => (Array.isArray(SMASH) ? hammerToAnvil(SMASH) : SMASH)));

console.log(hammerToAnvil([1, [2], [[3], 4], 5]));

// Returns
// [ 1, 2, 3, 4, 5 ]