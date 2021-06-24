/* isDisjoint, Javascript, Array
 * Checks if the two iterables are disjointed (have no common values).
 *
 * 1. Use the new Set() constructor to create a new Set object from each iterable.
 * 2. Use Array.prototype.every() and Set.prototype.has() to check that the
 * two iterables have no common values.
 */

const isDisjoint = (a, b) => {
  const setA = new Set(a), setB = new Set(b);
  return [...setA].every(value => !setB.has(value));
};

console.log(isDisjoint(new Set([1, 2]), new Set([3, 4])));
console.log(isDisjoint(new Set([1, 2]), new Set([1, 3])));

// Returns
// true
// false