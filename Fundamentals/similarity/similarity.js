/* similarity, Javascript, Array, Math
* Returns an array of elements that appear in both arrays.
*
* 1. Use Array.prototype.includes() to determine 
* values that are not part of values.
* 2. Use Array.prototype.filter() to remove them.
*/

const revealSimilitude = (arr, values) => arr.filter(gotcha => values.includes(gotcha));

console.log(revealSimilitude([1, 2, 3], [1, 2, 4]));

// Returns
// [ 1, 2 ]

/* \o/
*   |
*  / \ This is your night~ && everything is going to === alright!
*/