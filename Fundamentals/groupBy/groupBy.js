/* groupBy, Javascript, Array, Object
* Groups the elements of an array based on the given function.
*
* 1. Use Array.prototype.map() to map the values of the array
* to a function or property name.
* 2. Use Array.prototype.reduce() to create an object, where the
* keys are produced from the mapped results.
*/

const groupBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i]);
      return acc;
    }, {});

console.log(groupBy([5.1, 6.1, 6.2], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));

// Returns
// { '5': [ 5.1 ], '6': [ 6.1, 6.2 ] }
// { '3': [ 'one', 'two' ], '5': [ 'three' ] }