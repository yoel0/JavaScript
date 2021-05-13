/* stableSort, Javascript, Array
* Performs stable sorting of an array, preserving the initial indexes
* of items when their values are the same.
*
* 1. Use Array.prototype.map() to pair each element of the input array
* with its corresponding index.
* 2. Use Array.prototype.sort() and a compare function to sort the list,
* preserving their initial order if the items compared are equal.
* 3. Use Array.prototype.map() to convert back to the initial array items.
* 4. Does not mutate the original array, but returns a new array instead.
*/

const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({item, index}))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({item}) => item);

const arr = [0, 1, 2, 3, 4, 5];
const stable = console.log(stableSort(arr, () => 0));

// Returns
// [ 0, 1, 2, 3, 4, 5 ]
