/* isNumber, Javascript, Type, Math
* Checks if the given argument is a number.
*
* 1. Use typeof to check if a value is classified as a number primitive.
* 2. To safeguard against NaN, check if val === val (as NaN has 
* a typeof equal to number and is the only value not equal to itself).
*/

const isNumber = value => typeof value === 'number' && value === value;

console.log(isNumber(1));
console.log(isNumber('1'));
console.log(isNumber(NaN));

// Returns
// true
// false
// false