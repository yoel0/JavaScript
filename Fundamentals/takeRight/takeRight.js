/* takeRight, Javascript, Array
* Creates an array with n elements removed from the end.
*
* 1. Use Array.prototype.slice() to create a slice of the 
* array with n elements taken from the end.
*/

const takeRight = (a, n = 1) => a.slice(a.length - n, a.length);

console.log('SEVER🗡 :', takeRight([1, 2, 3, 4, 5, 6], 3));

// Returns
// SEVER🗡 : [ 4, 5, 6 ]