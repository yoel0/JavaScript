/* isPrimitive, Javascript, Type
 * Checks if the passed value is primitive or not.
 *
 * 1. Create an object from val and compare it with val to determine if 
 * the passed value is primitive (i.e. not equal to the created object).
 */ 

const primitiveOutlaw = value => Object(value) !== value;

console.log(primitiveOutlaw(null)); // -> true
console.log(primitiveOutlaw(undefined)); // -> true
console.log(primitiveOutlaw(18)); // -> true
console.log(primitiveOutlaw('Hell Cat')); // -> true
console.log(primitiveOutlaw(false)); // -> true
console.log(primitiveOutlaw(Symbol())); // -> true
console.log(primitiveOutlaw([])); // -> false
console.log(primitiveOutlaw({})); // -> false
// primitive Outlaws Baebee && you ain't never gunna bring us in~