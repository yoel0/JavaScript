/* factorial, Javascript, Math, Algorithm, Recursion
* Calculates the factorial of a number.
*
* 1. Use recursion.
* 2. If n is less than or equal to 1, return 1.
* 3. Otherwise, return the product of n and the factorial of n - 1.
* 4. Throw a TypeError if n is a negative number.
*/

const facts = honey =>
  honey < 0
        ? (() => {
          throw new TypeError('Positive Energy[numbers] Only');
        })()
        : honey <= 1
        ? 1
        : honey * facts(honey - 1);

console.log(facts(8));

// Returns
// 40320