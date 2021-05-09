/* mergeSort, Javascript, Array, Recursion, Algorithm
 * Sorts an array of numbers, using the merge sort algorithm.
 *
 * 1. Use recursion.
 * 2. If the length of the array is less than 2, return the array.
 * 3. Use Math.floor() to calculate the middle point of the array.
 * 4. Use Array.prototype.slice() to slice the array in two and recursively
 * call mergeSort() on the created subarrays.
 * 5. Finally, use Array.from() and Array.prototype.shift() to combine the
 * two sorted subarrays into one.
 */

const mergeSort = a => {
  if (a.length < 2) return a;
  const m = Math.floor(a.length / 2);
  const l = mergeSort(a.slice(0, m));
  const r = mergeSort(a.slice(m, a.length));
  return Array.from({length: l.length + r.length}, () => {
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
};

console.log(mergeSort([5, 1, 4, 3, 2]));

/* a = array. m = middle. l = left. r = right. */
// Returns
// [ 1, 2, 3, 4, 5 ]