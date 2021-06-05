/* defaults, Javascript, Object
 * Assigns default values for all properties in an object that are undefined.
 *
 * 1. Use Object.assign() to create a new empty object and copy the original
 * one to maintain key order.
 * 2. Use Array.prototype.reverse() and the spread operator (...) to combine
 * the default values from left to right.
 * 3. Finally, use obj again to overwrite properties that originally had a value.
 */

const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj);

console.log(
  defaults({a: 1}, {b: 2}, {b: 8}, {a: 4})
);

// Returns
// { a: 1, b: 2 }