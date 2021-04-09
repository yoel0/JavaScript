/* delay, Javascript, Function
 * Invokes the provided function after ms milliseconds.
 *
 * 1. Use setTimeout() to delay execution of fn.
 * 2. Use the spread (...) operator to supply the function with
 * an arbitrary number of arguments.
 */

const delay = (fn, ms, ...args) => setTimeout(fn, ms, ...args);

delay(
  function(msg) {
    console.log(msg);
  },
  2000,
  'Show me, show me, how you do that trick.'
);

// Logs 'Show me, show me, how you do that trick.' after two seconds.