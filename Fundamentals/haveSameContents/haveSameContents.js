/* haveSameContents, Javascript, Array
* Checks if two arrays contain the same elements regardless of order.
*
* 1. Use a for...of loop over a Set created from the values of both arrays.
* 2. Use Array.prototype.filter() to compare the amount of occurrences 
* of each distinct value in both arrays.
* 3. Return false if the counts do not match for any element, true otherwise.
*/
// --->> LETS GOOOOOOOOOO!

const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter(e => e === v).length !== b.filter(e => e === v).length)
      return false;
  return true;
};

console.log(haveSameContents([3, 4, 2], [2, 3, 4])); // RAAAAAAH!

// Returns
// true