/* forOwn, Javascript, Object
* Iterates over all own properties of an object,
* running a callback for each one.
*
* 1. Use Object.keys(obj) to get all the properties of the object.
* 2. Use Array.prototype.forEach() to run the provided function
* for each key-value pair.
* 3. The callback receives three arguments - the value, the key
* and the object.
*/

const forOwn = (obj, fn) =>
  Object.keys(obj).forEach(key => fn(obj[key], key, obj));

forOwn({snickers: 'bar', a: 1}, v => console.log(v));

// Returns
// bar
// 1