/* compact, Javascript, Array
* Removes falsy values from an array.
*
* 1. Use Array.prototype.filter() 
* to filter out falsy values (false, null, 0, "", undefined, and NaN).
*/

const springCleaning = laundry => laundry.filter(Boolean);

console.log(springCleaning([0, 1, false, 2, '', 'a', 'b' * 88, NaN, 'c', 66]));

// Returns
// [ 1, 2, 'a', 'c', 66 ]