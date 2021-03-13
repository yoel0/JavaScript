/* gcd, Javascript, Math, Algorithm, Recursion
* Calculates the greatest common divisor between 
* two or more numbers/arrays.
*
* 1. The inner _gcd function uses recursion.
* 2. Base case is when y equals 0. In this case, return x.
* 3. Otherwise, return the GCD of y and the remainder of the division x/y.
*/

const gcd = (...array) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...array].reduce((a, b) => _gcd(a, b));
};

console.log(gcd(56, 98));

// Returns
// 14