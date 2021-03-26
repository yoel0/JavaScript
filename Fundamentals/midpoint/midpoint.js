/* midpoint, Javascript, Math
* Calculates the midpoint between two pairs of (x,y) points.
*
* 1. Destructure the array to get x1, y1, x2 and y2.
* 2. Calculate the midpoint for each dimension by dividing
* the sum of the two endpoints by 2.
*/

const scryMidpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];

console.log(scryMidpoint([2, 2], [4, 4]));
console.log(scryMidpoint([4, 4], [6, 6]));
console.log(scryMidpoint([1, 3], [2, 4]));

// Returns
// [ 3, 3 ]
// [ 5, 5 ]
// [ 1.5, 3.5 ]