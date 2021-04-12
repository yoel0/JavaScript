/* collectInto, Javascript, Function, Array
* Changes a function that accepts an array into a variadic function.
*
* 1. Given a function, return a closure that collects all inputs
* into an array-accepting function.
*/

const collectInto = fn => (...args) => fn(args);

const promiseAll = collectInto(Promise.all.bind(Promise));

let promiseOne = Promise.resolve('Jenny');
let promiseTwo = Promise.resolve('Darling');
let promiseThree = new Promise(resolve => setTimeout(
  resolve,
  2000,
  'you my Amigoooo'
));

promiseAll(promiseOne, promiseTwo, promiseThree).then(console.log);

// Returns
// [ 'Jenny', 'Darling', 'you my Amigoooo' ] After 2 seconds.