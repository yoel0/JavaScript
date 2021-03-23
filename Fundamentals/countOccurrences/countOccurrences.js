/* countOccurrences, Javascript, Array
* Counts the occurrences of a value in an array.
*
* 1. Use Array.prototype.reduce() to increment a counter
* each time the specific value is encountered inside the array.
*/

const countOccurrences = (array, value) =>
  array.reduce((a, v) => (v === value ? a + 1 : a), 0);

console.log(countOccurrences([
  'the',
  'only',
  'way',
  'is',
  'up',
  'up',
  'up'
], 'up'));

console.log(countOccurrences([1, 1, 1, 1, 2, 3, 4, 5], 1));

// Returns
// 3
// 4