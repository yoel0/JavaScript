/* deepClone, Javascript, Object, Recursion
* Creates a deep clone of an object. 
* Clones primitives, arrays and objects, 
* excluding class instances.
*
* 1. Use Recursion.
* 2. Check if the passed object is null and, if so, return null.
* 3. Use Object.assign() and an empty object ({}) 
* to create a shallow clone of the original.
* 4. Use Object.keys() and Array.prototype.forEach() 
* to determine which key-value pairs need to be deep cloned.
* 5. If the object is an Array, set the clone's length 
* to that of the original and use Array.from(clone) 
* to create a clone.
*/

const deepCloneJutsu = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
    (clone[key] = 
      typeof obj[key] === 'object' ? deepCloneJutsu(obj[key]) : 
      obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

const a = { drink: 'coffee', obj: { a:1, b:2 } };
const b = deepCloneJutsu(a);

console.log(b);

// Returns
// { drink: 'coffee', obj: { a: 1, b: 2 } }