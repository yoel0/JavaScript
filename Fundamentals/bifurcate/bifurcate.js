/* bifurcate, Javascript, Array
* Splits values into two groups, based on the result 
* of the given filter array.
*
* 1. Use Array.prototype.reduce() and Array.prototype.push() 
* to add elements to groups, based on filter.
* 2. If filter has a truthy value for any element, add it to 
* the first group, otherwise add it to the second group.
*/

const bifurcate = (a, filter) =>
  a.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
    [],
    [],
  ]);

console.log(bifurcate(['one', 'two', 'four', 'three'], [true, true, false, true]));

// Returns
// [ [ 'one', 'two', 'three' ], [ 'four' ] ]