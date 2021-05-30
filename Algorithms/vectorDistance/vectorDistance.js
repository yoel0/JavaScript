/* vectorDistance, JavaScript, Math, Algorithm
* Calculates the distance between two vectors.
*
* 1. Use Array.prototype.reduce(), Math.pow() and Math.sqrt() to
* calculate the Euclidean distance between two vectors.
*/

const vectorDistance = (x, y) =>
  Math.sqrt(x.reduce((acc, val, i) => acc + Math.pow(val - y[i], 2), 0));

console.log(
  'Ay, ohhhhhhh lets push it hard tonight, alright:',
  vectorDistance([10, 0, 5], [20, 0, 10])
);

// Returns
// Ay, ohhhhhhh lets push it hard tonight, alright: 11.180339887498949