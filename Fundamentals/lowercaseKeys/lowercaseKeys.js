/* lowercaseKeys, Javascript, Object
* Creates a new object from the specified object, where all the
* keys are in lowercase.
*
* 1. Use Object.keys() and Array.prototype.reduce() to create
* a new object from the specified object.
* 2. Convert each key in the original object to lowercase,
* using String.prototype.toLowerCase().
*/

const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

const myObject = {Name: 'Sherbet', sUrNaMe: 'McSlappin'};
const myObjectPaprika = console.log(lowercaseKeys(myObject));

// Returns
// { name: 'Sherbet', surname: 'McSlappin' }
