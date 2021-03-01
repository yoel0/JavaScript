/* union, Javascript, Array
* Returns every element that exists in any of the two arrays 
* at least once.
*
* 1. Create a new Set() with all values of a and b and convert 
* it to an array.
*/

const union = (a, b) => Array.from(new Set([...a, ...b]));

console.log(union([1, 2, 3], [4, 3, 2]));

// Returns
// [ 1, 2, 3, 4 ]