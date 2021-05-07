/* findLast, Javascript, Array
* Finds the last element for which the provided function
* returns a truthy value.
*
* 1. Use Array.prototype.filter() to remove elements for
* which fn returns falsy values.
* 2. Use Array.prototype.pop() to get the last element
* in the filtered array.
*/

const findLast = (arr, fn) => arr.filter(fn).pop();

console.log(findLast([1, 2, 3, 4], n => n % 2 === 1));

// Returns
// 3