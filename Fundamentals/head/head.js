/* head, Javascript, Array, Head
* Returns the head of an array.
*
* 1. Check if arr is truthy and has a length property.
* 2. Use arr[0] if possible to return the first element,
* otherwise return undefined.
*/

const headHunter = spear => (spear && spear.length ? spear[0] : undefined);

console.log(headHunter([3, 2, 1]));
console.log(headHunter(['c', 'b', 'a']));
console.log(headHunter([]));
console.log(headHunter(null));
console.log(headHunter(undefined));

// Returns
// 3
// c
// undefined
// undefined
// undefined