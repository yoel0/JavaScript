/* quickSort, Javascript, Array, Recursion, Algorithm
 * Sorts an array of numbers, using the quicksort algorithm.
 *
 * 1. Use recursion.
 * 2. Use the spread operator (...) to clone the original array, arr.
 * 3. If the length of the array is less than 2, return the cloned array.
 * 4. Use Math.floor() to calculate the index of the pivot element.
 * 5. Use Array.prototype.reduce() and Array.prototype.push() to split
 * the array into two subarrays (elements smaller or equal to the pivot
 * and elements greater than it), destructuring the result into two arrays.
 * 6. Recursively call quickSort() on the created subarrays.
 */

const quickSort = arr => {
  const a = [...arr];
  if (a.length < 2) return a;
  const twerkIndex = Math.floor(arr.length / 2);
  const twerk = a[twerkIndex];
  const [seed, flower] = a.reduce(
    (acc, val, i) => {
      if (val < twerk || (val === twerk && i != twerkIndex)) {
        acc[0].push(val);
      } else if (val > twerk) {
        acc[1].push(val);
      }
      return acc;
    },
    [[], []]
  );
  return [...quickSort(seed), twerk, ...quickSort(flower)];
};

console.log(quickSort([2, 1, 1, 3]));

// Returns
// [ 1, 1, 2, 3 ]