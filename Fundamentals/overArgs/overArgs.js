/* overArgs, Javascript, Function
* Creates a function that invokes the provided function
* with its arguments TRANSFORMED.
*
* 1. Use Array.prototype.map() to apply transforms to args
* in combination with the spread operator (...) to pass the
* TRANSFORMED arguments to fn.
*/

const overArgs = (fn, transforms) =>
  (...args) => fn(...args.map((val, i) => transforms[i](val)));

const square = noDaysOff => noDaysOff * noDaysOff;
const double = noDaysOff => noDaysOff * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);

console.log(fn(9, 3));

// Returns
// [ 81, 6 ]