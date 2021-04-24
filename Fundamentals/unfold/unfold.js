/* unfold, Javascript, Function, Array
* Builds an array, using an iterator function and
* an initial seed value.
*
* 1. Use a while loop and Array.prototype.push() to
* call the function repeatedly until it returns false.
* 2. The iterator function accepts one argument (seed) and
* must always return an array with two elements ([value, nextSeed])
* or false to terminate.
*/

const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};

const f = n => (n > 50 ? false : [-n, n + 10]);
console.log(unfold(f, 10));

// Returns
// [ -10, -20, -30, -40, -50 ]