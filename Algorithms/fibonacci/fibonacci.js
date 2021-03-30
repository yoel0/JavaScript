/* fibonacci, Javascript, Math, Algorithm
* Generates an array, containing the Fibonacci sequence,
* up until the nth term.
*
* 1. Use Array.from() to create an empty array of the specific length,
* initializing the first two values (0 and 1).
* 2. Use Array.prototype.reduce() and Array.prototype.concat() to add values
* into the array, using the sum of the last two values, except for the first two.
*/

const fibonacci = n =>
  Array.from({length: n}).reduce(
    (acc, value, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );

console.log(fibonacci(6));

// Returns
// [ 0, 1, 1, 2, 3, 5 ]