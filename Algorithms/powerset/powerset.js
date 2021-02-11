/* powerset, Javascript, Math, Algorithm
 * Returns the powerset of a given array of numbers.
 *
 * 1. Use Array.prototype.reduce() combined with Array.prototype.map() 
 * to iterate over elements and combine into an array containing all combinations.
 */

const powerset = array =>
  array.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

console.log('👠 Prada Set: ', powerset([1, 2]));

// Returns
// 👠 Prada Set:  [ [], [ 1 ], [ 2 ], [ 2, 1 ] ]