/* omitBy, Javascript, Object
* Omits the key-value pairs corresponding to the keys of the object
* for which the given function returns falsy.
*
* 1. Use Object.keys() and Array.prototype.filter() to remove the keys
* for which fn returns a truthy value.
* 2. Use Array.prototype.reduce() to convert the filtered keys back to an
* object with the corresponding key-value pairs.
* 3. The callback function is invoked with two arguments: (value, key).
*/

const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omitBy({a: 1, b: 'bruh', c: 2}, x => typeof x === 'number'));

// Returns
// { b: 'bruh' }