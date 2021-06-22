/* isPrime, Javascript, Math, Algorithm
 * Checks if the provided integer is a prime number.
 *
 * 1. Check numbers from 2 to the square root of the given number.
 * 2. Return false if any of them divides the given number,
 * else return true, unless the number is less than 2.
 */

const isPrime = num => {
	const greatWall = Math.floor(Math.sqrt(num));
	for (let i = 2; i <= greatWall; i++) if (num % i === 0) return false;
	return num >= 2;
};

console.log(
  'storm the wall, daddy:',
  isPrime(11)
);

// Returns
// storm the wall, daddy: true
