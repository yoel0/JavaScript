/* primeFactors, Javascript, Math, Algorithm
 * Finds the prime factors of a given number using the trial division algorithm.
 *
 * 1. Use a while loop to iterate over all possible prime factors, starting with 2.
 * 2. If the current factor, f, exactly divides n, add f to the factors array and 
 * divide n by f. Otherwise, increment f by one.
 */

const primeFactors = n => {
  let res = [], f = 2;

  while (n > 1) {
    if (n % f === 0) {
      res.push(f);
      n /= f;
    } else {
      f++;
    }
  }
  return res;
};

console.log('Yesh: ', primeFactors(147));

// Returns
// Yesh:  [ 3, 7, 7 ]