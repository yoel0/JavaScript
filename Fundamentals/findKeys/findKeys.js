/* findKeys, Javascript, Object
* Finds all the keys in the provided object that match the given value.
*
* 1. Use Object.keys(obj) to get all the properties of the object.
* 2. Use Array.prototype.filter() to test each key-value pair 
* and return all keys that are equal to the given value.
*/

const findKeys = (obj, val) =>
  Object.keys(obj).filter(key => obj[key] === val);

const ages = {
  Yama: 999,
  Unicorn: 900,
  Gundam: 900
};

console.log(findKeys(ages, 900));

// Returns
// [ 'Unicorn', 'Gundam' ]
