/* arithmeticProgression, Javascript, Math, Algorithm
* Creates an array of numbers in the arithmetic progression,
* starting with the given positive integer and up to the specified limit.
*
* 1. Use Array.from() to create an array of the desired length,
* lim/n, and a map function to fill it with the desired values in
* the given range.
*/

const arithmeticProgression = (n, limit) =>
  Array.from({length: Math.ceil(limit / n)}, (_, i) => (i + 1) * n);

console.log(
  'love',
  arithmeticProgression(2, 100),
  'lvl 100'
);

// Returns
// love [
//   2,  4,  6,  8, 10,  12, 14, 16, 18, 20, 22,
//  24, 26, 28, 30, 32,  34, 36, 38, 40, 42, 44,
//  46, 48, 50, 52, 54,  56, 58, 60, 62, 64, 66,
//  68, 70, 72, 74, 76,  78, 80, 82, 84, 86, 88,
//  90, 92, 94, 96, 98, 100
// ] lvl 100