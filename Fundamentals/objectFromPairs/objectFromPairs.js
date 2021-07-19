/* objectFromPairs, Javascript, Object, Array
 * Creates an object from the given key-value pairs.
 *
 * 1. Use Array.prototype.reduce() to create and combine key-value pairs.
 */

const objectFromPairs = arr =>
  arr.reduce((a, [key, val]) => ((a[key] = val), a), {});

console.log(
  'can you feel it',
  objectFromPairs([['love', 1], ['pain', 2]])
);

// Returns
// can you feel it { love: 1, pain: 2 }