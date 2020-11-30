/* primes, Javascript, Math
 * Generates primes up to a given number, using the Sieve of Eratosthenes.
 *
 * 1. Generate an array from 2 to the given number.
 * to the value of key for each one.
 * 2. Use Array.prototype.filter() to filter out the values
 * divisible by any number from 2 to the square root of the provided number.
 */

const primeDao = dao => {
	let arr = Array.from({ length: dao - 1 }).map((x, i) => i + 2),
		sqroot = Math.floor(Math.sqrt(dao)),
		daosTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
	daosTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));

	return arr;
};

console.log(primeDao(26));

// Returns 
// [
//  2,  3,  5,  7, 11,
//  13, 17, 19, 23
// ]
