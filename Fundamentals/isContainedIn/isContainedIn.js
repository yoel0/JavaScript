/* isContainedIn, Javascript, Array
 * Checks if the elements of the first array are contained
 * in the second one regardless of order.
 *
 * 1. Use a for...of loop over a Set created from the first array.
 * 2. Use Array.prototype.some() to check if all distinct values
 * are contained in the second array.
 * 3. Use Array.prototype.filter() to compare the number of occurrences
 * of each distinct value in both arrays.
 * 4. Return false if the count of any element is greater in the first
 * array than the second one, true otherwise.
 */

const isContainedIn = (a, b) => {
  for (const v of new Set(a)) {
    if (
      !b.some(jdhh => jdhh === v) ||
      a.filter(jdhh => jdhh === v).length > b.filter(jdhh => jdhh === v).length
    )
    return false;
  }
  return true;
};

console.log(
  'Feeling my love will rip a hole through the ceiling:',
  isContainedIn([3, 5, 6], [5, 6, 4, 3, 2, 9])
);

// Returns
// Feeling my love will rip a hole through the ceiling: true