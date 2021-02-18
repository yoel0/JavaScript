/* clampNumber, Javascript, Math
 * Clamps num within the inclusive range specified by the 
 * boundary values a and b.
 *
 * 1. If num falls within the range, return num.
 * 2. Otherwise, return the nearest number in the range.
 */

const clampNumber = (n, a, b) =>
  Math.max(Math.min(n, Math.max(a, b)), Math.min(a, b));

console.log(clampNumber(2, 3, 5));
console.log(clampNumber(1, -1, -5));

// Returns
// 3
// -1