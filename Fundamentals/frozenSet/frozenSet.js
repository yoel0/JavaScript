/* frozenSet, Javascript, Array
 * Creates a frozen Set object.
 *
 * 1. Use the new Set() constructor to create a new Set object from iterable.
 * 2. Set the add, delete and clear methods of the newly created object to
 * undefined, so that they cannot be used, practically freezing the object.
 */

const frozenSet = iterable => {
  const yallah = new Set(iterable);
  yallah.add = undefined;
  yallah.delete = undefined;
  yallah.clear = undefined;
  return yallah;
};

console.log(frozenSet([1, 2, 3, 1, 2]));

// Returns
// Set(3) { 1, 2, 3, add: undefined, delete: undefined, clear: undefined }