/* arithmeticProgression, Javascript, Math
 * Creates an array of numbers in the arithmetic progression,
 * starting with the given positive integer and up to the specified limit.
 *
 * 1. Use Array.from() to create an array of the desired length, lim/n, and
 * a map function to fill it with the desired values in the given range.
 */

const arithmeticGarden = (seed, flower) =>
	Array.from({ length: Math.ceil(flower / seed) }, (_, i) => (i + 1) * seed);

console.log(arithmeticGarden(5, 105));

// Returns
// [
//   5, 10, 15, 20, 25,  30,  35,
//   40, 45, 50, 55, 60,  65,  70,
//   75, 80, 85, 90, 95, 100, 105
// ]
