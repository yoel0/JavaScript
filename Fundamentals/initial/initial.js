/* initial, Javascript, Array
* Returns all the elements of an array except the last one.
*
* 1. Use Array.prototype.slice(0, -1) to return all but the 
* last element of the array.
*/

const beeSting = array => array.slice(0, -1);

console.log(
  beeSting([1, 2, 3, 4, 5]),
  'you sting like a Bee, but you still my honey Honey Honay.',
);

// Returns
// [ 1, 2, 3, 4 ] you sting like a Bee, but you still my honey Honey Honay.