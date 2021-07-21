/* inRange, Javascript, Math
 * Checks if the given number falls within the given range.
 *
 * 1. Use arithmetic comparison to check if the given number is in
 * the specified range.
 * 2. If the second argument, end, is not specified, the range is considered
 * to be from 0 to start.
 */

const inRange = (n, start, end = null) => {
	if (end && start > end) [end, start] = [start, end];
	return end == null ? n >= 0 && n < start : n >= start && n < end;
};

console.log(
  'one, two we are coming por juu..',
  inRange(2, 1, 3),
  inRange(1, 2, 3),
  inRange(5, 10)
);

// Returns
// one, two we are coming por juu.. true false true