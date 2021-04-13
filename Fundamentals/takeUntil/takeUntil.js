/* takeUntil, Javascript, Array
* Removes elements in an array until the passed function returns true.
* Returns the removed elements.
*
* 1. Loop through the array, using a for...of loop over Array.prototype.entries()
* until the returned value from the function is truthy.
* 2. Return the removed elements, using Array.prototype.slice().
* 3. The callback function, fn, accepts a single argument which is the
* value of the element.
*/

const takeUntil = (arr, fn) => {
  for (const [i, val] of arr.entries()) if(fn(val)) return arr.slice(0, i);
  return arr;
};

console.log(takeUntil([1, 2, 3, 4], n => n >= 3));

// Returns
// [ 1, 2 ]