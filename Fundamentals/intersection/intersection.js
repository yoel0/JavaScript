/* intersection, Javascript, Array
* Returns the elements that exist in both arrays, filtering duplicate values.
*
* 1. Create a Set from b, then use Array.prototype.filter() on a to only
* keep values contained in b.
*/

const intersection = (a, b) => {
  const s = new Set(b);
  return [...new Set(a)].filter(x => s.has(x));
};

console.log(intersection([1, 2, 3], [4, 3, 2]));

// Returns
// [ 2, 3 ]