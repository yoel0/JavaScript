/* initializeArrayWithRangeRight, Javascript, Array
* Initializes an array containing the numbers in the specified range
* (in reverse) where start and end are inclusive with their common
* difference step.
*
* 1. Use Array.from(Math.ceil((end+1-start)/step)) to create an array of
* the desired length(the amounts of elements is equal to (end-start)/step
* or (end+1-start)/step for inclusive end), Array.prototype.map() to fill
* with the desired values in a range.
* 2. Omit the second argument, start, to use a default value of 0.
* 3. Omit the last argument, step, to use a default value of 1.
*/

const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({length: Math.ceil((end + 1 - start) / step)}).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );

console.log(initializeArrayWithRangeRight(10));
console.log(initializeArrayWithRangeRight(10, 5));

// Returns
// [
//   10, 9, 8, 7, 6,
//    5, 4, 3, 2, 1,
//    0
// ]
// [ 10, 9, 8, 7, 6, 5 ]