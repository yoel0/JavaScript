/* coalesce, Javascript, Type
* Returns the first defined, non-null argument.
*
* 1. Use Array.prototype.find() and Array.prototype.includes() 
* to find the first value that is not equal to undefined or null.
*/

const coalesceRomance = (...args) => args.find(v => ![undefined, null].includes(v));

console.log(coalesceRomance(null, undefined, 'soulmate', NaN));

// Returns
// soulmate