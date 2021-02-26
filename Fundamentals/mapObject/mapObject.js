/* mapObject, Javascript, Array, Object
* Maps the values of an array to an object using a function.
*
* 1. Use Array.prototype.reduce() to apply fn to each element in arr 
* and combine the results into an object.
* 2. Use el as the key for each property and the result of fn as the value.
*/

const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});

console.log(mapObject([1, 2, 3], beatIT => beatIT * beatIT));

// Returns
// { '1': 1, '2': 4, '3': 9 }