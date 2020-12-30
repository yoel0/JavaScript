/* distance, Javascript, Math, Algorithm
 * Calculates the distance between two points.
 *
 * 1. Use Math.hypot() to calculate the Euclidean distance between two points.
 */

const euclideanDistance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

console.log(euclideanDistance(1, 1, 2, 3));

// Returns
// 2.23606797749979