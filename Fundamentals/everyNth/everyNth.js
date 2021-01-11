/* everyNth, Javascript, Array
* Returns every nth element in an array.
*
* 1. Use Array.prototype.filter() to create a new array 
* that contains every nth element of a given array.
*/

const summonNth = (array, nth) => array.filter((e, i) => i % nth === nth - 1);

console.log(summonNth([1, 2, 3, 4, 5, 6], 2), 'you who ReaD this, You are Beautiful..');

// Returns
// [ 2, 4, 6 ] you who ReaD this, You are Beautiful..