/* sumPower, Javascript, Math
* Calculates the sum of the powers of all the numbers from
* start to end (both inclusive).
*
* 1. Use Array.prototype.fill() to create an array of
* all the numbers in the target range.
* 2. Use Array.prototype.map() and the exponent operator (**)
* to raise them to power and Array.prototype.reduce() to add them
* together.
* 3. Omit the second argument, power, to use a default power of 2.
* 4. Omit the third argument, start, to use a default starting value of 1.
*/

const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
  .fill(0)
  .map((x, i) => (i + start) ** power)
  .reduce((a, b) => a + b, 0);

console.log(sumPower(10));
console.log(sumPower(10, 3));
console.log(sumPower(10, 3, 5));

// Returns
// 385
// 3025
// 2925
