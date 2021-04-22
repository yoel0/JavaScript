/* times, Javascript, Function
* Iterates over a callback n times.
*
* 1. Use Function.prototype.call() to call fn n times or
* until it returns false.
* 2. Omit the last argument, context, to use an undefined
* object (or the global object in non-strict mode).
*/

const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

let output = '';
times(10, i => (output += i));
console.log(output);

// Returns
// 0123456789