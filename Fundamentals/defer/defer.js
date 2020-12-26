/* defer, Javascript, Function
 * Defers invoking a function until the current call stack has cleared.
 *
 * 1. Use setTimeout() with a timeout of 1 ms to add a new event 
 * to the event queue and allow the rendering engine to complete its work.
 * 2. Use the spread (...) operator to supply the function 
 * with an arbitrary number of arguments.
 */

const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

defer(console.log, 'Channee, my Brother.'), console.log('Merry Christmas');

// Logs 'Merry Christmas' then 'Channee, my Brother.'