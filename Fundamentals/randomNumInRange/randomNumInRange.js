/* randomNumInRange, Javascript, Math, Random
 * Generates a random number in the specified range.
 *
 * 1. Use Math.random() to generate a random value, map it to
 * the desired range using multiplication.
 */

const randomNumInRange = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

console.log(randomNumInRange(1, 100));

// Returns
// 93 (random num each time)