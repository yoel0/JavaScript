/* dig, Javascript, Object, Recursion
 * Gets the target value in a nested JSON object, based on the given key.
 *
 * 1. Use the in operator to check if target exists in obj.
 * 2. If found, return the value of obj[target].
 * 3. Otherwise use Object.values(obj) and Array.prototype.reduce()
 * to recursively call dig on each nested object until the first matching
 * key/value pair is found.
 */

// LEGGO LIKE EGGOSZZZZ
const handInCookieJar = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return handInCookieJar(val, target);
    }, undefined);

// BAP BAP BAP
const data = {
  cookie1: {
    cookie2: {
      cookie3: 'Chocolate Chip DATA, and dont you forget it'
    }
  }
};

console.log(handInCookieJar(data, 'cookie3'));
console.log(handInCookieJar(data, 'cookie4')); // hehe

// Returns
// Chocolate Chip DATA, and dont you forget it
// undefined