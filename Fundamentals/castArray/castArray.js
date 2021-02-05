/* castArray, Javascript, Type, Array
* Casts the provided value as an array if it's not one.
*
* 1. Use Array.prototype.isArray() to determine if val 
* is an array and return it as-is or encapsulated in an array 
* accordingly.
*/

const castArray = value => (Array.isArray(value) ? value : [value]);

console.log(castArray('Schnitzel with a side of Pickles'));
console.log(castArray([1, 3, 3, 7]));

// Returns
// [ 'Schnitzel with a side of Pickles' ] -> casted, like its hot.
// [ 1, 3, 3, 7 ] -> as-is value is already an [].